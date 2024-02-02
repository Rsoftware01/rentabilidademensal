// calculate.js

// Dados mensais de rendimento para as carteiras
const top10XPData = [
  { month: "jul/18", return: 9.76 },
  { month: "ago/18", return: -3.4 },
  { month: "set/18", return: 3.81 },
];

const topDividendsData = [
  { month: "jul/18", return: 5.82 },
  { month: "ago/18", return: 0.07 },
  { month: "set/18", return: 1.98 },
];

function calculateInvestmentResults(
  startingAmount,
  additionalContribution,
  selectedClass
) {
  let selectedData;

  // Mapear a opção selecionada para o conjunto de dados correspondente
  if (selectedClass === "top10") {
    selectedData = top10XPData;
  } else if (selectedClass === "topDividends") {
    selectedData = topDividendsData;
  } else if (selectedClass === "allClasses") {
    // Se todas as carteiras forem selecionadas, usar ambos os conjuntos de dados
    return {
      top10: calculateInvestmentResultsForClass(
        startingAmount,
        additionalContribution,
        top10XPData
      ),
      topDividends: calculateInvestmentResultsForClass(
        startingAmount,
        additionalContribution,
        topDividendsData
      ),
    };
  } else {
    // Se nenhuma opção correspondente for encontrada, retornar um array vazio
    return [];
  }

  return calculateInvestmentResultsForClass(
    startingAmount,
    additionalContribution,
    selectedData
  );
}

function calculateInvestmentResultsForClass(
  startingAmount,
  additionalContribution,
  classData
) {
  // Inicializar o array de resultados mensais
  const monthlyResults = [startingAmount];

  // Calcular os resultados mensais
  for (let i = 0; i < classData.length; i++) {
    const monthlyReturn =
      (monthlyResults[i] + additionalContribution) *
      (1 + classData[i].return / 100);
    monthlyResults.push(monthlyReturn);
  }

  // Adicionando o atributo 'month' aos objetos de retorno
  const resultsWithMonth = classData.map((item, index) => ({
    month: item.month,
    interestReturns: item.return,
    investedAmount: monthlyResults[index],
    // Adicione outros atributos conforme necessário
  }));

  return resultsWithMonth;
}

export { calculateInvestmentResults };
