import {
  calculateInvestmentResultsForClass,
  calculateInvestmentResults,
  calculateFinalResults,
  top10XPData,
  topDividendsData,
  fiiXPData,
  ibovespa,
  ifix,
} from "./src/calculate";
import { Chart } from "chart.js/auto";

const progressionChart = document.getElementById("progression");
const form = document.getElementById("investment-form");
const clearFormButton = document.getElementById("clear-form");
let lineChartReference = {};
let tableReference = {};

function displayResults(results) {
  for (const entry of results) {
    console.log(
      `Mês: ${entry.month}, Valor investido: ${entry.investedAmount}, Rendimento: ${entry.return}`
    );
  }
}

function formatCurrencyToTable(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderConsolidatedTable(consolidatedData) {
  const table = document.getElementById("results-final");
  const tableBody = table.querySelector("tbody");

  // Limpa a tabela antes de renderizar os novos resultados
  tableBody.innerHTML = "";

  consolidatedData.forEach((rowData) => {
    const row = document.createElement("tr");

    const totalInvestedCell = document.createElement("td");
    totalInvestedCell.textContent = formatCurrencyToTable(
      rowData.totalInvested
    );
    row.appendChild(totalInvestedCell);

    const totalReturnCell = document.createElement("td");
    totalReturnCell.textContent = formatCurrencyToTable(rowData.totalReturn);
    row.appendChild(totalReturnCell);

    const finalValueCell = document.createElement("td");
    finalValueCell.textContent = formatCurrencyToTable(rowData.finalValue);
    row.appendChild(finalValueCell);

    tableBody.appendChild(row);
  });

  // Adicione este console.log para verificar os dados
  console.log("Consolidated Data:", consolidatedData);
}

// Adicione esta função no seu código, de preferência antes da função handleCalculateResults

function renderTable(results) {
  const table = document.getElementById("results-table");
  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = [""];

  for (const headerText of headers) {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  }

  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  const tableBody = table.querySelector("tbody");

  // Limpa a tabela antes de renderizar os novos resultados
  tableBody.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    const entry = results[i];
    const row = document.createElement("tr");

    // Alterna a classe de fundo entre as linhas
    if (i % 2 !== 0) {
      row.classList.add("bg-blue-200");
    }

    const monthCell = document.createElement("td");
    monthCell.textContent = entry.month;
    row.appendChild(monthCell);

    const investWithoutReturnCell = document.createElement("td");
    investWithoutReturnCell.textContent = formatCurrencyToTable(
      entry.investWithoutReturn
    );
    row.appendChild(investWithoutReturnCell);

    const returnCell = document.createElement("td");
    returnCell.textContent = formatCurrencyToTable(entry.return);
    row.appendChild(returnCell);

    const returnReturnCell = document.createElement("td");
    returnReturnCell.textContent = formatCurrencyToTable(entry.returnReturn);
    row.appendChild(returnReturnCell);

    const totalInvestedCell = document.createElement("td");
    totalInvestedCell.textContent = formatCurrencyToTable(entry.investedAmount);
    row.appendChild(totalInvestedCell);

    tableBody.appendChild(row);
  }
}

function handleCalculateResults() {
  const startingAmountInput = document.getElementById("starting-amount");
  const additionalContributionInput = document.getElementById(
    "additional-contribution"
  );
  const selectedClassInput = document.getElementsByClassName("investment-clas");

  // Obtenha os valores dos campos de entrada
  const startingAmount = parseFloat(startingAmountInput.value) || 0;
  const additionalContribution =
    parseFloat(additionalContributionInput.value) || 0;
  const selectedClass1 = selectedClassInput.value || "top10";

  // Calcular os resultados finais
  const investmentResults = calculateFinalResults(
    startingAmount,
    additionalContribution,
    selectedClass1
  );

  // Exibir resultados
  if (investmentResults.error) {
    console.error(`Erro: ${investmentResults.error}`);
  } else {
    console.log(`Investimento total: ${investmentResults.totalInvestment}`);
    console.log(
      `Investimento inicial: ${investmentResults.totalStartingAmount}`
    );
    console.log(
      `Aportes adicionais: ${investmentResults.totalAdditionalContribution}`
    );
    console.log("\nDetalhes mensais:\n");
    displayResults(investmentResults.results);
    renderTable(investmentResults.results);
    renderConsolidatedTable(investmentResults.consolidatedData);
  }
}

function renderProgression(evt) {
  evt.preventDefault();
  if (document.querySelector(".error")) {
    return;
  }

  resetCharts();

  const startingAmount = Number(
    document.getElementById("starting-amount").value.replace(",", ".")
  );
  const additionalContribution = Number(
    document.getElementById("additional-contribution").value.replace(",", ".")
  );

  const selectedClass1 =
    document.getElementsByClassName("investment-clas")[0].value;
  const selectedClass2 =
    document.getElementsByClassName("investment-clas")[1].value;
  let results;

  if (selectedClass1 === "allClasses") {
    const resultsTop10 = calculateInvestmentResults(
      startingAmount,
      additionalContribution,
      "top10"
    );
    const resultsTopDividends = calculateInvestmentResults(
      startingAmount,
      additionalContribution,
      "topDividends"
    );
    const resultsFiiXP = calculateInvestmentResults(
      startingAmount,
      additionalContribution,
      "fii"
    );

    results = {
      top10: resultsTop10,
      topDividends: resultsTopDividends,
      fiiXP: resultsFiiXP,
    };
  } else {
    results = calculateInvestmentResults(
      startingAmount,
      additionalContribution,
      selectedClass1,
      selectedClass2
    );
  }
  console.log("Resultados:", results);

  if (Array.isArray(results[selectedClass1])) {
    lineChartReference[selectedClass1] = new Chart(progressionChart, {
      type: "line",
      data: {
        labels: results[selectedClass1].map(
          (investmentObject) => investmentObject.month
        ),
        datasets: [
          {
            label: `Total Investido - Sem Rendimento (${selectedClass1})`,
            data: results[selectedClass1].map(
              (investmentObject) => investmentObject.investWithoutReturn
            ),
            borderColor: selectedClass1 === "top10" ? "#3366FF" : "#3366FF",
            fill: false,
          },
          {
            label: `Total Investido + Retorno do Investimento (${selectedClass1})`,
            data: results[selectedClass1].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: selectedClass1 === "top10" ? "#33FF57" : "#33FF57",
            fill: false,
          },
          {
            label: `Banchmark (${selectedClass2})`,
            data: results[selectedClass2].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: selectedClass2 === "top10" ? "#FF5733" : "#FF5733",
            fill: false,
          },

          // Adicione aqui as linhas para outras classes, se necessário
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            beginAtZero: true,
            suggestedMax:
              Math.max(
                ...results[selectedClass1].map(
                  (investmentObject) => investmentObject.investedAmount
                )
              ) + 1000,
          },
        },
      },
    });
  } else if (Array.isArray(results[selectedClass1])) {
    lineChartReference[selectedClass1] = new Chart(progressionChart, {
      type: "line",
      data: {
        labels: results[selectedClass1].map(
          (investmentObject) => investmentObject.month
        ),
        datasets: [
          {
            label: `Top 10`,
            data: results[selectedClass1].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: "#FF5733", // Cor fixa
            fill: false,
          },
          {
            label: `Top Dividendos`,
            data: results[selectedClass1].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: "#33FF57", // Cor fixa
            fill: false,
          },
          {
            label: `FII XP`,
            data: results[selectedClass1].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: "#FFFF00", // Cor fixa para FII XP
            fill: false,
          },
          {
            label: `Total Investido - Sem Rendimento`,
            data: results[selectedClass1].map(
              (investmentObject) => investmentObject.investWithoutReturn
            ),
            borderColor: selectedClass1 === "top10" ? "#3366FF" : "#3366FF", // Cores fixas
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: false,
            beginAtZero: false,
            suggestedMax:
              Math.max(
                ...results[selectedClass1].map(
                  (investmentObject) => investmentObject.investedAmount
                ),
                ...results[selectedClass1].map(
                  (investmentObject) => investmentObject.investWithoutReturn
                )
              ) + 1000,
          },
        },
      },
    });

    createTable(
      [
        "Mês",
        "Top 10 - Total Investido",
        "Top Dividendos - Total Investido",
        "FII XP - Total Investido",
      ],
      results["top10"].map((investmentObject, index) => ({
        month: investmentObject.month,
        totalInvestedAmount: investmentObject.investedAmount,
        totalReturn: investmentObject.return,
        topDividendsInvestedAmount:
          results["topDividends"][index].investedAmount,
        topDividendsReturn: results["topDividends"][index].return,
        fiiXPInvestedAmount: results["fiiXP"][index].investedAmount,
        fiiXPReturn: results["fiiXP"][index].return,
      })),
      "results-table"
    );
  }
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function resetCharts() {
  for (const key in lineChartReference) {
    if (lineChartReference.hasOwnProperty(key)) {
      lineChartReference[key].destroy();
    }
  }

  if (!isObjectEmpty(tableReference)) {
    tableReference.destroy();
  }
}

function clearForm() {
  form["starting-amount"].value = "";
  form["additional-contribution"].value = "";

  const tableElement = document.getElementById("results-table");
  const tableBody = tableElement.querySelector("tbody");
  const tableHead = tableElement.querySelector("thead");

  tableBody.innerHTML = "";
  tableHead.innerHTML = "";

  resetCharts();

  const errorInputContainers = document.querySelectorAll(".error");

  for (const errorInputContainer of errorInputContainers) {
    errorInputContainer.classList.remove("error");
    errorInputContainer.parentElement.querySelector("p").remove();
  }
}

function validateInput(evt) {
  if (evt.target.value === "") {
    return;
  }

  const { parentElement } = evt.target;
  const grandParentElement = evt.target.parentElement.parentElement;

  const inputValue = evt.target.value.replace(",", ".");
  if (
    !parentElement.classList.contains("error") &&
    (isNaN(inputValue) || Number(inputValue) <= 0)
  ) {
    const errorTextElement = document.createElement("p"); //<p></p>
    errorTextElement.classList.add("text-red-500"); //<p class =""></p>
    errorTextElement.classList.add("font-bold"); //<p class =""></p>
    errorTextElement.innerText = "Insira um valor maior do que zero"; //<p class="text-red-500 font-bold"> Insira um valor maior do que zero</p>

    parentElement.classList.add("error");
    grandParentElement.appendChild(errorTextElement);
  } else if (
    parentElement.classList.contains("error") &&
    !isNaN(inputValue) &&
    Number(inputValue) > 0
  ) {
    parentElement.classList.remove("error");
    grandParentElement.querySelector("p").remove();
  }
}

for (const formElement of form)
  if (formElement.tagName === "INPUT" && formElement.hasAttribute("name")) {
    formElement.addEventListener("blur", validateInput);
  }

const mainEl = document.querySelector("main");
const carouselEl = document.getElementById("carousel");
const nextButton = document.getElementById("slide-arrow-next");
const previousButton = document.getElementById("slide-arrow-previous");

nextButton.addEventListener("click", () => {
  carouselEl.scrollLeft += mainEl.clientWidth;
});

previousButton.addEventListener("click", () => {
  carouselEl.scrollLeft -= mainEl.clientWidth;
});

form.addEventListener("submit", renderProgression);
clearFormButton.addEventListener("click", clearForm);
const calculateButton = document.getElementById("calculate-results");
calculateButton.addEventListener("click", handleCalculateResults);
