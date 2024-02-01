//import { type } from "os";

//------------------

////import { generateReturnsArray } from "./src/investmentGoals";
//import { Chart } from "chart.js/auto";
//import { createTable } from "./src/table";
//import { createPopup } from "./src/popup";

//import jsPDF from "jspdf";
//import "jspdf-autotable";
//import * as XLSX from "xlsx";

const finalMoneyChart = document.getElementById("final-money-distribution");
const progressionChart = document.getElementById("progression");
const form = document.getElementById("investment-form");
const clearFormButton = document.getElementById("clear-form");
const investmentClasSelect = document.getElementById("investment-clas");

let doughnutChartReference = {};
let progressionChartReference = {};

const columnsArray = [
  { columnLabel: "Mês", accessor: "month" },
  {
    columnLabel: "Total investido",
    accessor: "investedAmount",
    format: (numberInfo) => formatCurrencyToTable(numberInfo),
  },
  {
    columnLabel: "Rendimento mensal",
    accessor: "interestReturns",
    format: (numberInfo) => formatCurrencyToTable(numberInfo),
  },
  {
    columnLabel: "Rendimento total",
    accessor: "totalInterestReturns",
    format: (numberInfo) => formatCurrencyToTable(numberInfo),
  },
  {
    columnLabel: "Quantia total",
    accessor: "totalAmount",
    format: (numberInfo) => formatCurrencyToTable(numberInfo),
  },
];

function formatCurrencyToTable(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatCurrencyTograph(value) {
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
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRate = Number(
    document.getElementById("return-rate").value.replace(",", ".")
  );
  const returnRatePeriod = document.getElementById("evaluation-period").value;
  const taxRate = Number(
    document.getElementById("tax-rate").value.replace(",", ".")
  );

  const selectedClas = investmentClasSelect.value;

  // Use os dados da lista fornecida para obter o rendimento mensal
  const monthlyData = getMonthlyData(selectedClas);

  // Gere os retornos mensais com base nos dados fornecidos
  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContribution,
    returnRate,
    returnRatePeriod,
    taxRate,
    monthlyData
  );

  const finalInvestmentObject = returnsArray[returnsArray.length - 1];

  doughnutChartReference = new Chart(finalMoneyChart, {
    type: "doughnut",
    data: {
      labels: ["Total Investido", "Rendimento", "Imposto"],
      datasets: [
        {
          data: [
            formatCurrencyTograph(finalInvestmentObject.investedAmount),
            formatCurrencyTograph(
              finalInvestmentObject.totalInterestReturns * (1 - taxRate / 100)
            ),
            formatCurrencyTograph(
              finalInvestmentObject.totalInterestReturns * (taxRate / 100)
            ),
          ],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
        },
      ],
    },
  });

  progressionChartReference = new Chart(progressionChart, {
    type: "line",
    data: {
      labels: returnsArray.map((investmentObject) => investmentObject.month),
      datasets: [
        {
          label: "Total Investido",
          data: returnsArray.map(
            (investmentObject) => investmentObject.investedAmount
          ),
          backgroundColor: "rgb(255, 99, 132)",
        },
        {
          label: "Retorno do Investimento",
          data: returnsArray.map((investmentObject) =>
            formatCurrencyTograph(investmentObject.interestReturns)
          ),
          backgroundColor: "rgb(54, 162, 235)",
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
        },
      },
    },
  });

  createTable(columnsArray, returnsArray, "results-table");

  // Chama a função para criar o popup
  console.log("Chamando createPopup");
  createPopup();
}

function getMonthlyData(selectedClas) {
  // Use os dados fornecidos para obter o rendimento mensal de cada carteira
  if (selectedClas === "Carteira Top Dividendos") {
    return [
      [12.2, -1.8, 0.5, 1.8, 4.4, 2.0, 1.1, 2.0, 0.3, -0.4, 1.7, 11.7],
      [-1.9, -2.8, -21.8, 6.8, 5.0, 6.1, 3.7, -4.1, -2.5, 0.1, 10.7, 4.2],
      [-0.7, -6.5, 12.5, -6.5, 0.0, -3.8, 0.3, 4.1, -4.8, -1.5, 3.1, 1.1],
      [7.3, 1.7, 5.2, -2.2, 6.0, -8.4, 7.5, 4.0, -4.8, 9.6, -4.7, -1.5],
      [-1.2, -2.0, -1.0, 8.9, 2.0, 9.0, 1.6, -1.0, 1.9, -2.5, 11.6, 6.5],
    ];
  } else if (selectedClas === "Carteira Top 10") {
    return [
      [7.2, -2.2, 1.8, 1.5, 4.0, 4.2, 3.2, 3.5, 2.5, 1.9, 3.0, 9.8],
      [4.2, -8.5, -39.9, 11.1, 4.4, 6.3, 7.9, 2.6, -3.2, -2.9, 9.6, 7.3],
      [-4.1, -0.3, 8.5, 2.3, 1.9, -0.5, -6.5, -4.3, -3.5, -7.3, -1.5, 4.0],
      [3.4, 3.6, 4.1, -7.1, 1.8, -10.4, 7.6, 7.6, -2.2, 9.5, -6.2, -2.4],
      [1.9, -8.9, -4.0, -1.3, 2.7, 9.4, 3.2, -7.5, -0.2, -3.8, 9.3, 6.8],
    ];
  } else {
    // Para "Todas as Carteiras", você pode combinar os dados das duas carteiras
    const dividendosData = getMonthlyData("Carteira Top Dividendos");
    const top10Data = getMonthlyData("Carteira Top 10");

    // Combine os dados das duas carteiras
    const combinedData = [];
    for (let i = 0; i < dividendosData.length; i++) {
      combinedData.push(dividendosData[i].concat(top10Data[i]));
    }

    return combinedData;
  }
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function resetCharts() {
  if (
    !isObjectEmpty(doughnutChartReference) &&
    !isObjectEmpty(progressionChartReference)
  ) {
    doughnutChartReference.destroy();
    progressionChartReference.destroy();
  }
}

function clearForm() {
  form["starting-amount"].value = "";
  form["additional-contribution"].value = "";
  form["time-amount"].value = "";
  form["return-rate"].value = "";
  form["tax-rate"].value = "";

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

// Adicione esta função para gerar o arquivo
function generateFile() {
  let fileType = "";

  while (!fileType) {
    const input = prompt("Escolha o tipo de arquivo (PDF ou Excel):");

    // Se o usuário pressionar Cancelar no prompt, `input` será `null`
    if (input === null) break;

    fileType = input.toLowerCase();

    if (fileType === "pdf") {
      generatePDF();
      break; // Sai do loop após a operação bem-sucedida
    } else if (fileType === "excel") {
      generateExcel();
      break; // Sai do loop após a operação bem-sucedida
    } else {
      alert("Formato não disponível. Por favor, escolha PDF ou Excel.");
      fileType = ""; // Reseta fileType para continuar no loop
    }
  }
}

function generatePDF() {
  const pdf = new jsPDF();
  pdf.text("Relatório de Investimentos", 20, 10);

  // Adiciona gráfico de rosca (doughnut)
  const doughnutDataURL = finalMoneyChart.toDataURL("image/png", 1.0);
  pdf.addImage(doughnutDataURL, "PNG", 20, 30, 80, 60);

  // Adiciona gráfico de barras (progression)
  const progressionDataURL = progressionChart.toDataURL("image/png", 1.0);
  pdf.addImage(progressionDataURL, "PNG", 20, 110, 120, 60); // Ajuste a largura para 120

  // Adiciona a tabela
  pdf.autoTable({ html: "#results-table", startY: 190 });

  // Salva ou exibe o arquivo
  pdf.save("relatorio_investimentos.pdf");
}

function generateExcel() {
  const wb = XLSX.utils.book_new();

  // Adiciona a tabela
  const ws = XLSX.utils.table_to_sheet(
    document.getElementById("results-table")
  );
  XLSX.utils.book_append_sheet(wb, ws, "Investimentos");

  // Adiciona gráfico de rosca (doughnut)
  const doughnutDataURL = finalMoneyChart.toDataURL("image/png");
  const doughnutBlob = dataURLtoBlob(doughnutDataURL);
  const doughnutObject = {
    "!type": "image",
    "!data": doughnutBlob,
    "!mime": "image/png",
    "!link": "Doughnut Chart",
  };
  XLSX.utils.book_append_sheet(
    wb,
    { "!objects": [doughnutObject] },
    "Gráfico de rosca"
  );

  // Adiciona gráfico de barras (progression)
  const progressionDataURL = progressionChart.toDataURL("image/png");
  const progressionBlob = dataURLtoBlob(progressionDataURL);
  const progressionObject = {
    "!type": "image",
    "!data": progressionBlob,
    "!mime": "image/png",
    "!link": "Progression Chart",
  };
  XLSX.utils.book_append_sheet(
    wb,
    { "!objects": [progressionObject] },
    "Gráfico de barras"
  );

  // Salva ou exibe o arquivo
  XLSX.writeFile(wb, "Relatorio_investimentos.xlsx");
}

// Função auxiliar para converter Data URL para Blob
function dataURLtoBlob(dataURL) {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// Adicione este ouvinte de evento para o botão "Gerar arquivo"
document
  .getElementById("generate-file")
  .addEventListener("click", generateFile);
