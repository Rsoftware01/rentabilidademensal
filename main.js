// main.js

import {
  calculateInvestmentResults,
  top10XPData,
  topDividendsData,
  fiiXPData,
} from "./src/calculate";
import { Chart } from "chart.js/auto";

const finalMoneyChart = document.getElementById("final-money-distribution");
const progressionChart = document.getElementById("progression");
const form = document.getElementById("investment-form");
const clearFormButton = document.getElementById("clear-form");
let lineChartReference = {};
let tableReference = {};

function formatCurrencyToGraph(value) {
  return value.toFixed(2);
}

function renderProgression(evt) {
  evt.preventDefault();
  if (document.querySelector(".error")) {
    return;
  }

  const tableElement = document.getElementById("results-table");
  const tableBody = tableElement.querySelector("tbody");
  const tableHead = tableElement.querySelector("thead");

  tableBody.innerHTML = "";
  tableHead.innerHTML = "";

  resetCharts();

  const startingAmount = Number(
    document.getElementById("starting-amount").value.replace(",", ".")
  );
  const additionalContribution = Number(
    document.getElementById("additional-contribution").value.replace(",", ".")
  );
  const selectedClass = document.getElementById("investment-clas").value;
  let results;

  if (selectedClass === "allClasses") {
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
      selectedClass
    );
  }

  if (Array.isArray(results)) {
    lineChartReference[selectedClass] = new Chart(progressionChart, {
      type: "line",
      data: {
        labels: results.map((investmentObject) => investmentObject.month),
        datasets: [
          {
            label: `Total Investido`,
            data: results.map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: selectedClass === "top10" ? "#FF5733" : "#33FF57", // Cores fixas
            fill: false,
          },
          {
            label: `Retorno do Investimento`,
            data: results.map((investmentObject) => investmentObject.return),
            borderColor: selectedClass === "top10" ? "#FF5733" : "#33FF57", // Cores fixas
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
            stacked: true,
            beginAtZero: true,
            suggestedMax:
              Math.max(
                ...results.map(
                  (investmentObject) => investmentObject.investedAmount
                )
              ) + 1000,
          },
        },
      },
    });

    createTable(["Mês", `Total Investido`], results, "results-table");
  } else {
    lineChartReference["allClasses"] = new Chart(progressionChart, {
      type: "line",
      data: {
        labels: results["top10"].map(
          (investmentObject) => investmentObject.month
        ),
        datasets: [
          {
            label: `Top 10 - Total Investido`,
            data: results["top10"].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: "#FF5733", // Cor fixa
            fill: false,
          },
          {
            label: `Top Dividendos - Total Investido`,
            data: results["topDividends"].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: "#33FF57", // Cor fixa
            fill: false,
          },
          {
            label: `FII XP - Total Investido`,
            data: results["fiiXP"].map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: "#3366FF", // Cor fixa para FII XP
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
            stacked: true, // Adicione esta linha
            beginAtZero: true,
            suggestedMax:
              Math.max(
                ...results["top10"].map(
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

  lineChartReference[selectedClass] = new Chart(progressionChart, {
    type: "line",
    data: {
      labels: allLabels,
      datasets: [...allInvestedAmountData, ...allReturnData],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          beginAtZero: true,
          suggestedMax: Math.max(...allInvestedAmountData[0].data) + 1000,
        },
      },
    },
  });
}

// Função auxiliar para obter uma cor aleatória para os gráficos de linha
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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
