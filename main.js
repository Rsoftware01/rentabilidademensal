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

function handleCalculateResults() {
  const resultContainer1 = document.getElementById("dados1");
  const resultContainer2 = document.getElementById("dados2");
  resultContainer1.innerHTML = "";
  resultContainer2.innerHTML = "";
  resultContainer1.innerHTML = `<div class="h-[30%] w-full flex flex-col ml-4 mr-2 mb-8 border-separate border-2 rounded-lg">
         <p class="font-bold text-lg text-center bg-blue-900 text-white">Carteira</p>
     </div>`; // Limpar o conteúdo anterior e adicionar o título
  resultContainer2.innerHTML = `<div class="h-[30%] w-full flex flex-col ml-4 mr-2 mb-8 border-separate border-2 rounded-lg">
         <p class="font-bold text-lg text-center bg-blue-900 text-white">Benchmark</p>
     </div>`; // Limpar o conteúdo anterior e adicionar o título

  const startingAmountInput = document.getElementById("starting-amount");
  const additionalContributionInput = document.getElementById(
    "additional-contribution"
  );
  const selectedClass1 =
    document.getElementsByClassName("investment-clas")[0].value;
  const selectedClass2 =
    document.getElementsByClassName("investment-clas")[1].value;
  const startingMonthSelect = document.getElementById("investment-inicial");
  const finalMonthSelect = document.getElementById("investment-final");

  const startingMonth = startingMonthSelect.value;
  const finalMonth = finalMonthSelect.value;
  // Obtenha os valores dos campos de entrada
  const startingAmount = parseFloat(startingAmountInput.value) || 0;
  const additionalContribution =
    parseFloat(additionalContributionInput.value) || 0;

  // Calcular os resultados finais para as classes selecionadas
  const investmentResults = calculateInvestmentResults(
    startingAmount,
    additionalContribution,
    selectedClass1,
    selectedClass2,
    startingMonth,
    finalMonth // Passando os meses selecionados
  );

  // Exibir resultados para as classes selecionadas
  if (investmentResults[selectedClass1].error) {
    resultContainer1.innerHTML += `<p>Erro: ${investmentResults[selectedClass1].error}</p>`;
  } else {
    const lastMonthIndex1 = investmentResults[selectedClass1].length - 1;
    const lastMonthData1 = investmentResults[selectedClass1][lastMonthIndex1];

    const inicial1 = lastMonthData1.inicial;
    const totalInvestment1 = lastMonthData1.investWithoutReturn - inicial1;
    const totalWReturn1 = lastMonthData1.investWithoutReturn;
    const finalReturn1 = lastMonthData1.investedAmount - totalWReturn1;
    const totalTotal1 = lastMonthData1.investedAmount;

    resultContainer1.innerHTML += `<p class="ml-32" >Investimento inicial: ${formatCurrencyToTable(
      inicial1
    )}</p>`;
    resultContainer1.innerHTML += `<p class="ml-32" >Investimento mensal: ${formatCurrencyToTable(
      totalInvestment1
    )}</p>`;
    resultContainer1.innerHTML += `<p class="ml-32" >Total Investido: ${formatCurrencyToTable(
      totalWReturn1
    )}</p>`;
    resultContainer1.innerHTML += `<p class="ml-32" >Retorno final: ${formatCurrencyToTable(
      finalReturn1
    )}</p>`;
    resultContainer1.innerHTML += `<p class="ml-32" >Total final: ${formatCurrencyToTable(
      totalTotal1
    )}</p>`;
  }

  if (investmentResults[selectedClass2].error) {
    resultContainer2.innerHTML += `<p>Erro: ${investmentResults[selectedClass2].error}</p>`;
  } else {
    const lastMonthIndex2 = investmentResults[selectedClass2].length - 1;
    const lastMonthData2 = investmentResults[selectedClass2][lastMonthIndex2];

    const inicial2 = lastMonthData2.inicial;
    const totalInvestment2 = lastMonthData2.investWithoutReturn - inicial2;
    const totalWReturn2 = lastMonthData2.investWithoutReturn;
    const finalReturn2 = lastMonthData2.investedAmount - totalWReturn2;
    const totalTotal2 = lastMonthData2.investedAmount;

    resultContainer2.innerHTML += `<p class="ml-32" >Investimento inicial: ${formatCurrencyToTable(
      inicial2
    )}</p>`;
    resultContainer2.innerHTML += `<p class="ml-32" >Investimento mensal: ${formatCurrencyToTable(
      totalInvestment2
    )}</p>`;
    resultContainer2.innerHTML += `<p class="ml-32" >Total Investido: ${formatCurrencyToTable(
      totalWReturn2
    )}</p>`;
    resultContainer2.innerHTML += `<p class="ml-32" >Retorno final: ${formatCurrencyToTable(
      finalReturn2
    )}</p>`;
    resultContainer2.innerHTML += `<p class="ml-32" >Total final: ${formatCurrencyToTable(
      totalTotal2
    )}</p>`;
  }
}

function clearResults() {
  const totalInvestmentElement = document.getElementById("total-investment");
  const finalReturnElement = document.getElementById("final-return");
  const totalAdditionalContributionElement = document.getElementById(
    "total-additional-contribution"
  );

  totalInvestmentElement.textContent = "";
  finalReturnElement.textContent = "";
  totalAdditionalContributionElement.textContent = "";

  const resultsTableBody = document
    .getElementById("results-table")
    .querySelector("tbody");
  resultsTableBody.innerHTML = "";

  // Limpar gráficos
  resetCharts();

  // Limpar os dados dentro dos contêineres resultContainer1 e resultContainer2
  const resultContainer1 = document.getElementById("dados1");
  const resultContainer2 = document.getElementById("dados2");
  resultContainer1.innerHTML = `<div class="h-[30%] w-full flex flex-col ml-4 mr-2 mb-8 border-separate border-2 rounded-lg">
         <p class="font-bold text-lg text-center bg-blue-900 text-white">Carteira</p>
     </div>`;
  resultContainer2.innerHTML = `<div class="h-[30%] w-full flex flex-col ml-4 mr-2 mb-8 border-separate border-2 rounded-lg">
         <p class="font-bold text-lg text-center bg-blue-900 text-white">Benchmark</p>
     </div>`;
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

  // Obtendo os valores selecionados nos campos de data inicial e final
  // Adicione a obtenção dos valores selecionados nos campos de data inicial e final
  const startingMonthSelect = document.getElementById("investment-inicial");
  const finalMonthSelect = document.getElementById("investment-final");

  const startingMonth = startingMonthSelect.value;
  const finalMonth = finalMonthSelect.value;

  let results;

  if (selectedClass1 === "allClasses") {
    results = calculateInvestmentResults(
      startingAmount,
      additionalContribution,
      "top10",
      undefined, // Deixe undefined para as classes "allClasses"
      startingMonth, // Passa o mês inicial
      finalMonth // Passa o mês final
    );
  } else {
    results = calculateInvestmentResults(
      startingAmount,
      additionalContribution,
      selectedClass1,
      selectedClass2,
      startingMonth, // Passa o mês inicial
      finalMonth // Passa o mês final
    );
  }

  // Aqui você pode usar os arrays de dados diretamente de `results`
  // Exemplo de como acessar os arrays de dados:
  console.log("Dados de todas as classes:", results);
  console.log("Top 10:", results["top10"]);
  console.log("Top Dividendos:", results["topDividends"]);
  console.log("FII XP:", results["fiiXP"]);

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
            label: `Total Investido - Sem Rendimento`,
            data: results[selectedClass1].map(
              (investmentObject) => investmentObject.investWithoutReturn
            ),
            borderColor: selectedClass1 === "top10" ? "#3366FF" : "#3366FF",
            fill: false,
          },
          {
            label: `Total Investido + Retorno do Investimento`,
            data: results[selectedClass1].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: selectedClass1 === "top10" ? "#33FF57" : "#33FF57",
            fill: false,
          },
          {
            label: `Banchmark (${
              selectedClass2 === "allClasses" ? "allClasses" : selectedClass2
            })`,
            data:
              selectedClass2 === "allClasses"
                ? []
                : results[selectedClass2]?.map(
                    (investmentObject) => investmentObject.investedAmount
                  ) || [], // Se selectedClass2 não estiver definido ou não for uma chave válida, retorna um array vazio
            borderColor: selectedClass1 === "top10" ? "#FF5733" : "#FF5733",
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
  } else {
    lineChartReference["allClasses"] = new Chart(progressionChart, {
      type: "line",
      data: {
        labels: results["top10"].map(
          (investmentObject) => investmentObject.month
        ),
        datasets: [
          {
            label: `Top 10`,
            data: results["top10"].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: "#FF5733", // Cor fixa
            fill: false,
          },
          {
            label: `Top Dividendos`,
            data: results["topDividends"].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: "#33FF57", // Cor fixa
            fill: false,
          },
          {
            label: `FII XP`,
            data: results["fiiXP"].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: "#FFFF00", // Cor fixa para FII XP
            fill: false,
          },
          {
            label: `Total Investido - Sem Rendimento`,
            data: results["top10"].map(
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
                ...results["top10"].map(
                  (investmentObject) => investmentObject.investedAmount
                ),
                ...results["top10"].map(
                  (investmentObject) => investmentObject.investWithoutReturn
                ),
                ...results["topDividends"].map(
                  (investmentObject) => investmentObject.investedAmount
                ),
                ...results["fiiXP"].map(
                  (investmentObject) => investmentObject.investedAmount
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
  console.log("Gráfico renderizado com sucesso!");
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

  resetCharts();

  const startingAmountInput = document.getElementById("starting-amount");
  const additionalContributionInput = document.getElementById(
    "additional-contribution"
  );

  startingAmountInput.value = "";
  additionalContributionInput.value = "";

  clearResults(); // Adiciona esta linha para limpar os resultados

  const errorInputContainers = document.querySelectorAll(".error");

  for (const errorInputContainer of errorInputContainers) {
    errorInputContainer.classList.remove("error");
    errorInputContainer.parentElement.querySelector("p").remove();
  }

  // Limpa os elementos dentro do elemento com o ID "results-final"
  const resultsFinalElement = document.getElementById("results-final");
  const children = resultsFinalElement.children;
  for (const child of children) {
    child.innerHTML = "";
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

form.addEventListener("submit", renderProgression);
clearFormButton.addEventListener("click", clearForm);
const calculateButton = document.getElementById("calculate-results");
calculateButton.addEventListener("click", handleCalculateResults);
