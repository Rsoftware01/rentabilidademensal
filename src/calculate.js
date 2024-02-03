// calculate.js

// Dados mensais de rendimento para as carteiras
const top10XPData = [
  { month: "jul/18", return: 9.76 },
  { month: "ago/18", return: -3.4 },
  { month: "set/18", return: 3.81 },
  { month: "out/18", return: 13.84 },
  { month: "nov/18", return: 2.5 },
  { month: "dez/18", return: 1.75 },
  { month: "jan/19", return: 7.18 },
  { month: "fev/19", return: -2.2 },
  { month: "mar/19", return: 1.77 },
  { month: "abr/19", return: 1.53 },
  { month: "mai/19", return: 4.01 },
  { month: "jun/19", return: 4.18 },
  { month: "jul/19", return: 3.21 },
  { month: "ago/19", return: 3.49 },
  { month: "set/19", return: 2.55 },
  { month: "out/19", return: 1.89 },
  { month: "nov/19", return: 2.96 },
  { month: "dez/19", return: 9.82 },
  { month: "jan/20", return: 4.19 },
  { month: "fev/20", return: -8.52 },
  { month: "mar/20", return: -39.89 },
  { month: "abr/20", return: 11.07 },
  { month: "mai/20", return: 4.43 },
  { month: "jun/20", return: 6.28 },
  { month: "jul/20", return: 7.85 },
  { month: "ago/20", return: 2.56 },
  { month: "set/20", return: -3.2 },
  { month: "out/20", return: -2.9 },
  { month: "nov/20", return: 9.57 },
  { month: "dez/20", return: 7.25 },
  { month: "jan/21", return: -4.11 },
  { month: "fev/21", return: -0.29 },
  { month: "mar/21", return: 8.46 },
  { month: "abr/21", return: 2.32 },
  { month: "mai/21", return: 1.85 },
  { month: "jun/21", return: -0.5 },
  { month: "jul/21", return: -6.49 },
  { month: "ago/21", return: -4.26 },
  { month: "set/21", return: -3.51 },
  { month: "out/21", return: -7.28 },
  { month: "nov/21", return: -1.48 },
  { month: "dez/21", return: 4.0 },
  { month: "jan/22", return: 3.37 },
  { month: "fev/22", return: 3.58 },
  { month: "mar/22", return: 4.13 },
  { month: "abr/22", return: -7.05 },
  { month: "mai/22", return: 1.75 },
  { month: "jun/22", return: -10.38 },
  { month: "jul/22", return: 7.63 },
  { month: "ago/22", return: 7.65 },
  { month: "set/22", return: -2.22 },
  { month: "out/22", return: 9.51 },
  { month: "nov/22", return: -6.22 },
  { month: "dez/22", return: -2.44 },
  { month: "jan/23", return: 1.92 },
  { month: "fev/23", return: -8.86 },
  { month: "mar/23", return: -4.02 },
  { month: "abr/23", return: -1.29 },
  { month: "mai/23", return: 2.67 },
  { month: "jun/23", return: 9.45 },
  { month: "jul/23", return: 3.19 },
  { month: "ago/23", return: -7.46 },
  { month: "set/23", return: -0.2 },
  { month: "out/23", return: -3.8 },
  { month: "nov/23", return: 9.33 },
  { month: "dez/23", return: 6.78 },
  { month: "jan/24", return: -4.08 },
];

const topDividendsData = [
  { month: "jul/18", return: 5.82 },
  { month: "ago/18", return: 0.07 },
  { month: "set/18", return: 1.98 },
  { month: "out/18", return: 7.66 },
  { month: "nov/18", return: 3.71 },
  { month: "dez/18", return: -1.18 },
  { month: "jan/19", return: 12.19 },
  { month: "fev/19", return: -1.78 },
  { month: "mar/19", return: 0.47 },
  { month: "abr/19", return: 1.8 },
  { month: "mai/19", return: 4.35 },
  { month: "jun/19", return: 1.97 },
  { month: "jul/19", return: 1.1 },
  { month: "ago/19", return: 2.04 },
  { month: "set/19", return: 0.26 },
  { month: "out/19", return: -0.41 },
  { month: "nov/19", return: 1.74 },
  { month: "dez/19", return: 11.73 },
  { month: "jan/20", return: -1.94 },
  { month: "fev/20", return: -2.83 },
  { month: "mar/20", return: -21.81 },
  { month: "abr/20", return: 6.83 },
  { month: "mai/20", return: 5.0 },
  { month: "jun/20", return: 6.08 },
  { month: "jul/20", return: 3.66 },
  { month: "ago/20", return: -4.09 },
  { month: "set/20", return: -2.49 },
  { month: "out/20", return: 0.14 },
  { month: "nov/20", return: 10.71 },
  { month: "dez/20", return: 4.22 },
  { month: "jan/21", return: -0.69 },
  { month: "fev/21", return: -6.49 },
  { month: "mar/21", return: 12.55 },
  { month: "abr/21", return: -6.46 },
  { month: "mai/21", return: -0.01 },
  { month: "jun/21", return: -3.77 },
  { month: "jul/21", return: 0.3 },
  { month: "ago/21", return: 4.1 },
  { month: "set/21", return: -4.76 },
  { month: "out/21", return: -1.54 },
  { month: "nov/21", return: 3.05 },
  { month: "dez/21", return: 1.13 },
  { month: "jan/22", return: 7.3 },
  { month: "fev/22", return: 1.74 },
  { month: "mar/22", return: 5.24 },
  { month: "abr/22", return: -2.22 },
  { month: "mai/22", return: 6.03 },
  { month: "jun/22", return: -8.43 },
  { month: "jul/22", return: 7.54 },
  { month: "ago/22", return: 3.97 },
  { month: "set/22", return: -4.79 },
  { month: "out/22", return: 9.64 },
  { month: "nov/22", return: -4.73 },
  { month: "dez/22", return: -1.54 },
  { month: "jan/23", return: -1.21 },
  { month: "fev/23", return: -2.0 },
  { month: "mar/23", return: -1.03 },
  { month: "abr/23", return: 8.88 },
  { month: "mai/23", return: 2.01 },
  { month: "jun/23", return: 8.96 },
  { month: "jul/23", return: 1.63 },
  { month: "ago/23", return: -1.04 },
  { month: "set/23", return: 1.88 },
  { month: "out/23", return: -2.47 },
  { month: "nov/23", return: 11.61 },
  { month: "dez/23", return: 6.51 },
  { month: "jan/24", return: -3.3 },
];

const fiiXPData = [
  { month: "jul/18", return: 1.23 },
  { month: "ago/18", return: -2.1 },
  { month: "set/18", return: 3.45 },
  { month: "out/18", return: 7.65 },
  { month: "nov/18", return: 4.82 },
  { month: "dez/18", return: 5.83 },
  { month: "jan/19", return: 5.93 },
  { month: "fev/19", return: 2.25 },
  { month: "mar/19", return: 1.51 },
  { month: "abr/19", return: 1.17 },
  { month: "mai/19", return: 3.85 },
  { month: "jun/19", return: 1.67 },
  { month: "jul/19", return: 3.19 },
  { month: "ago/19", return: 4.05 },
  { month: "set/19", return: 1.63 },
  { month: "out/19", return: 5.8 },
  { month: "nov/19", return: 8.36 },
  { month: "dez/19", return: 22.34 },
  { month: "jan/20", return: -8.73 },
  { month: "fev/20", return: -5.4 },
  { month: "mar/20", return: -17.58 },
  { month: "abr/20", return: 3.63 },
  { month: "mai/20", return: 1.9 },
  { month: "jun/20", return: 8.3 },
  { month: "jul/20", return: -2.34 },
  { month: "ago/20", return: 2.15 },
  { month: "set/20", return: 1.76 },
  { month: "out/20", return: -0.86 },
  { month: "nov/20", return: 0.87 },
  { month: "dez/20", return: 3.8 },
  { month: "jan/21", return: -1.15 },
  { month: "fev/21", return: 1.46 },
  { month: "mar/21", return: -1.2 },
  { month: "abr/21", return: 0.8 },
  { month: "mai/21", return: -0.7 },
  { month: "jun/21", return: -2.1 },
  { month: "jul/21", return: 3.7 },
  { month: "ago/21", return: -2.5 },
  { month: "set/21", return: -2.1 },
  { month: "out/21", return: 0.2 },
  { month: "nov/21", return: -4.95 },
  { month: "dez/21", return: 10.19 },
  { month: "jan/22", return: -1.44 },
  { month: "fev/22", return: -0.18 },
  { month: "mar/22", return: 1.96 },
  { month: "abr/22", return: 2.24 },
  { month: "mai/22", return: 0.7 },
  { month: "jun/22", return: -1.0 },
  { month: "jul/22", return: 0.7 },
  { month: "ago/22", return: 5.25 },
  { month: "set/22", return: -0.5 },
  { month: "out/22", return: -0.8 },
  { month: "nov/22", return: -3.82 },
  { month: "dez/22", return: -0.45 },
  { month: "jan/23", return: -2.07 },
  { month: "fev/23", return: 0.6 },
  { month: "mar/23", return: 1.22 },
  { month: "abr/23", return: 3.7 },
  { month: "mai/23", return: 4.04 },
  { month: "jun/23", return: 6.15 },
  { month: "jul/23", return: 1.97 },
  { month: "ago/23", return: 1.98 },
  { month: "set/23", return: 1.82 },
  { month: "out/23", return: -1.8 },
  { month: "nov/23", return: -0.2 },
  { month: "dez/23", return: 4.72 },
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
