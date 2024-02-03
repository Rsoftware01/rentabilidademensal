// calculate.js

// Dados mensais de rendimento para as carteiras
const top10XPData = [
  { month: "jul/18", return: 9.76 },
  { month: "ago/18", return: -3.4 },
  { month: "set/18", return: 3.81 },
  // ... (outros dados para "top10")
];

const topDividendsData = [
  { month: "jul/18", return: 5.82 },
  { month: "ago/18", return: 0.07 },
  { month: "set/18", return: 1.98 },
  // ... (outros dados para "topDividends")
];

const fiiXPData = [
  // Insira aqui os dados mensais para a carteira "FII XP"
  { month: "jul/18", return: 1.23 },
  { month: "ago/18", return: -2.1 },
  { month: "set/18", return: 3.45 },
  // ... (outros dados para "fiiXP")
];

function calculateInvestmentResults(
  startingAmount,
  additionalContribution,
  selectedClass
) {
  let selectedData;

  if (selectedClass === "top10") {
    selectedData = top10XPData;
  } else if (selectedClass === "topDividends") {
    selectedData = topDividendsData;
  } else if (selectedClass === "fii") {
    selectedData = fiiXPData;
  } else if (selectedClass === "allClasses") {
    const resultsTop10 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      top10XPData
    );
    const resultsTopDividends = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData
    );
    const resultsFiiXP = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      fiiXPData
    );

    // Encontrar o ponto inicial mínimo entre todas as classes
    const minStartingAmount = Math.min(
      resultsTop10[0].investedAmount,
      resultsTopDividends[0].investedAmount,
      resultsFiiXP[0].investedAmount
    );

    // Ajustar todos os resultados para começar do mesmo ponto mínimo
    const adjustedResultsTop10 = adjustStartingPoint(
      resultsTop10,
      minStartingAmount
    );
    const adjustedResultsTopDividends = adjustStartingPoint(
      resultsTopDividends,
      minStartingAmount
    );
    const adjustedResultsFiiXP = adjustStartingPoint(
      resultsFiiXP,
      minStartingAmount
    );

    return {
      top10: adjustedResultsTop10,
      topDividends: adjustedResultsTopDividends,
      fiiXP: adjustedResultsFiiXP,
    };
  } else {
    return [];
  }

  return calculateInvestmentResultsForClass(
    startingAmount,
    additionalContribution,
    selectedData
  );
}

function adjustStartingPoint(results, targetStartingAmount) {
  // Ajustar todos os resultados para começar do mesmo ponto mínimo
  return results.map((result) => ({
    ...result,
    investedAmount:
      result.investedAmount - result.startingAmount + targetStartingAmount,
  }));
}

function calculateInvestmentResultsForClass(
  startingAmount,
  additionalContribution,
  classData
) {
  const monthlyResults = [startingAmount];

  for (let i = 0; i < classData.length; i++) {
    const monthlyReturn =
      (monthlyResults[i] + (i === 0 ? 0 : additionalContribution)) *
      (1 + classData[i].return / 100);
    monthlyResults.push(monthlyReturn);
  }

  const resultsWithMonth = classData.map((item, index) => ({
    month: item.month,
    interestReturns: item.return,
    investedAmount: monthlyResults[index],
  }));

  return resultsWithMonth;
}

export { calculateInvestmentResults, top10XPData, topDividendsData, fiiXPData };
