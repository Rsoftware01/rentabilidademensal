import { calculateInvestmentResults } from "./src/calculate";
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
  const results = calculateInvestmentResults(
    startingAmount,
    additionalContribution,
    selectedClass
  );

  if (Array.isArray(results)) {
    lineChartReference[selectedClass] = new Chart(progressionChart, {
      type: "line",
      data: {
        labels: results.map((investmentObject) => investmentObject.month),
        datasets: [
          {
            label: `${selectedClass} - Total Investido`,
            data: results.map(
              (investmentObject) => investmentObject.investedAmount
            ),
            borderColor: getRandomColor(),
            fill: false,
          },
          {
            label: `${selectedClass} - Retorno do Investimento`,
            data: results.map((investmentObject) => investmentObject.return),
            borderColor: getRandomColor(),
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

    createTable(
      [
        "Mês",
        `${selectedClass} - Total Investido`,
        `${selectedClass} - Retorno do Investimento`,
      ],
      results,
      "results-table"
    );
  } else {
    // Caso seja um objeto, tratamos como "Todas as Carteiras"
    for (const className in results) {
      if (results.hasOwnProperty(className)) {
        const classResults = results[className];
        lineChartReference[className] = new Chart(progressionChart, {
          type: "line",
          data: {
            labels: classResults.map(
              (investmentObject) => investmentObject.month
            ),
            datasets: [
              {
                label: `${className} - Total Investido`,
                data: classResults.map(
                  (investmentObject) => investmentObject.investedAmount
                ),
                borderColor: getRandomColor(),
                fill: false,
              },
              {
                label: `${className} - Retorno do Investimento`,
                data: classResults.map(
                  (investmentObject) => investmentObject.return
                ),
                borderColor: getRandomColor(),
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
                    ...classResults.map(
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
            `${className} - Total Investido`,
            `${className} - Retorno do Investimento`,
          ],
          classResults,
          "results-table"
        );
      }
    }
  }
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
