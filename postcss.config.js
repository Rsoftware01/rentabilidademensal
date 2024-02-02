export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
function renderProgression(evt) {
  // ... (código anterior)

  const results = calculateInvestmentResults(
    startingAmount,
    additionalContribution,
    selectedClass
  );

  if (selectedClass === "Todas as Carteiras") {
    // Se for "Todas as Carteiras", mostrar ambas as linhas
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
                  (investmentObject) => investmentObject.interestReturns
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
  } else if (Array.isArray(results)) {
    // Restante do código para uma única classe
    lineChartReference[selectedClass] = new Chart(progressionChart, {
      type: "line",
      // ... (restante do código)
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
  }

  // ... (restante do código)
}
