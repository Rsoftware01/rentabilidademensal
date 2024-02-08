const ibovespa = [
  { month: "jun/18", return: 0.0 },
  { month: "jul/18", return: 8.88 },
  { month: "ago/18", return: -3.21 },
  { month: "set/18", return: 3.48 },
  { month: "out/18", return: 10.19 },
  { month: "nov/18", return: 2.38 },
  { month: "dez/18", return: -1.81 },
  { month: "jan/19", return: 10.82 },
  { month: "fev/19", return: -1.86 },
  { month: "mar/19", return: -0.18 },
  { month: "abr/19", return: 0.98 },
  { month: "mai/19", return: 0.7 },
  { month: "jun/19", return: 4.06 },
  { month: "jul/19", return: 0.84 },
  { month: "ago/19", return: -0.67 },
  { month: "set/19", return: 3.57 },
  { month: "out/19", return: 2.36 },
  { month: "nov/19", return: 0.95 },
  { month: "dez/19", return: 6.85 },
  { month: "jan/20", return: -1.63 },
  { month: "fev/20", return: -8.43 },
  { month: "mar/20", return: -29.9 },
  { month: "abr/20", return: 10.25 },
  { month: "mai/20", return: 8.57 },
  { month: "jun/20", return: 8.76 },
  { month: "jul/20", return: 8.27 },
  { month: "ago/20", return: -3.44 },
  { month: "set/20", return: -4.8 },
  { month: "out/20", return: -0.69 },
  { month: "nov/20", return: 15.9 },
  { month: "dez/20", return: 9.3 },
  { month: "jan/21", return: -3.32 },
  { month: "fev/21", return: -4.37 },
  { month: "mar/21", return: 6.0 },
  { month: "abr/21", return: 1.94 },
  { month: "mai/21", return: 6.16 },
  { month: "jun/21", return: 0.46 },
  { month: "jul/21", return: -3.94 },
  { month: "ago/21", return: -2.48 },
  { month: "set/21", return: -6.57 },
  { month: "out/21", return: -6.74 },
  { month: "nov/21", return: -1.53 },
  { month: "dez/21", return: 2.85 },
  { month: "jan/22", return: 6.98 },
  { month: "fev/22", return: 0.89 },
  { month: "mar/22", return: 6.06 },
  { month: "abr/22", return: -10.1 },
  { month: "mai/22", return: 3.22 },
  { month: "jun/22", return: -11.5 },
  { month: "jul/22", return: 4.69 },
  { month: "ago/22", return: 6.16 },
  { month: "set/22", return: 0.47 },
  { month: "out/22", return: 5.45 },
  { month: "nov/22", return: -3.06 },
  { month: "dez/22", return: -2.45 },
  { month: "jan/23", return: 3.37 },
  { month: "fev/23", return: -7.49 },
  { month: "mar/23", return: -2.91 },
  { month: "abr/23", return: 2.5 },
  { month: "mai/23", return: 3.74 },
  { month: "jun/23", return: 9.0 },
  { month: "jul/23", return: 3.27 },
  { month: "ago/23", return: -5.09 },
  { month: "set/23", return: 0.71 },
  { month: "out/23", return: -2.94 },
  { month: "nov/23", return: 12.54 },
  { month: "dez/23", return: 5.38 },
  { month: "jan/24", return: -4.79 },
];

const ifix = [
  { month: "jun/18", return: 0.0 },
  { month: "jul/18", return: 1.38 },
  { month: "ago/18", return: -0.7 },
  { month: "set/18", return: -0.21 },
  { month: "out/18", return: 5.04 },
  { month: "nov/18", return: 2.59 },
  { month: "dez/18", return: 2.22 },
  { month: "jan/19", return: 2.47 },
  { month: "fev/19", return: 1.03 },
  { month: "mar/19", return: 1.99 },
  { month: "abr/19", return: 1.03 },
  { month: "mai/19", return: 1.76 },
  { month: "jun/19", return: 2.88 },
  { month: "jul/19", return: 1.27 },
  { month: "ago/19", return: -0.11 },
  { month: "set/19", return: 0.79 },
  { month: "out/19", return: 3.75 },
  { month: "nov/19", return: 4.03 },
  { month: "dez/19", return: 10.63 },
  { month: "jan/20", return: -3.8 },
  { month: "fev/20", return: -3.65 },
  { month: "mar/20", return: -16.42 },
  { month: "abr/20", return: 4.68 },
  { month: "mai/20", return: 2.48 },
  { month: "jun/20", return: 4.87 },
  { month: "jul/20", return: -1.92 },
  { month: "ago/20", return: 1.76 },
  { month: "set/20", return: 0.08 },
  { month: "out/20", return: -0.63 },
  { month: "nov/20", return: 1.6 },
  { month: "dez/20", return: 2.1 },
  { month: "jan/21", return: 0.3 },
  { month: "fev/21", return: 0.2 },
  { month: "mar/21", return: -1.4 },
  { month: "abr/21", return: 0.5 },
  { month: "mai/21", return: -1.6 },
  { month: "jun/21", return: -2.2 },
  { month: "jul/21", return: 2.5 },
  { month: "ago/21", return: -2.6 },
  { month: "set/21", return: -1.2 },
  { month: "out/21", return: -1.5 },
  { month: "nov/21", return: -3.64 },
  { month: "dez/21", return: 8.78 },
  { month: "jan/22", return: -0.99 },
  { month: "fev/22", return: -1.29 },
  { month: "mar/22", return: 1.42 },
  { month: "abr/22", return: 1.19 },
  { month: "mai/22", return: 0.3 },
  { month: "jun/22", return: -0.9 },
  { month: "jul/22", return: 0.7 },
  { month: "ago/22", return: 5.76 },
  { month: "set/22", return: 0.49 },
  { month: "out/22", return: 0.1 },
  { month: "nov/22", return: -4.15 },
  { month: "dez/22", return: 0.0 },
  { month: "jan/23", return: -1.6 },
  { month: "fev/23", return: -0.45 },
  { month: "mar/23", return: -1.69 },
  { month: "abr/23", return: 3.52 },
  { month: "mai/23", return: 5.43 },
  { month: "jun/23", return: 4.71 },
  { month: "jul/23", return: 1.33 },
  { month: "ago/23", return: 0.49 },
  { month: "set/23", return: 0.2 },
  { month: "out/23", return: -1.98 },
  { month: "nov/23", return: 0.7 },
  { month: "dez/23", return: 4.2 },
];

const top10XPData = [
  { month: "jun/18", return: 0.0 },
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
  { month: "jun/18", return: 0.0 },
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
  { month: "jun/18", return: 0.0 },
  { month: "ago/18", return: 0.35 },
  { month: "set/18", return: 0.69 },
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

function adjustStartingPoint(results, targetStartingAmount) {
  // Ajustar todos os resultados para começar do mesmo ponto mínimo
  return results.map((result) => ({
    ...result,
    investedAmount:
      result.investedAmount - result.startingAmount + targetStartingAmount,
  }));
}

function calculateInvestmentResults(
  startingAmount,
  additionalContribution,
  selectedClass1,
  selectedClass2
) {
  const results = {};

  const calculateResultsForClass = (className) => {
    console.log("Acessando classe:", className);
    let selectedData;

    if (className === "top10") {
      selectedData = top10XPData;
    } else if (className === "topDividends") {
      selectedData = topDividendsData;
    } else if (className === "fii") {
      selectedData = fiiXPData;
    } else if (className === "ibovespa") {
      selectedData = ibovespa;
    } else if (className === "ifix") {
      selectedData = ifix;
    } else {
      console.log("Classe não reconhecida:", className);
      return [];
    }

    if (!selectedData) {
      console.log("Dados da classe", className, "não estão definidos.");
      return [];
    }

    const result = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      selectedData
    );

    console.log("Acesso feito com sucesso ao array dos dados:", result);
    return result;
  };

  if (selectedClass1 === "allClasses") {
    results["top10"] = calculateResultsForClass("top10");
    results["topDividends"] = calculateResultsForClass("topDividends");
    results["fiiXP"] = calculateResultsForClass("fii");
  } else if (selectedClass1 !== undefined) {
    results[selectedClass1] = calculateResultsForClass(selectedClass1);
  }

  if (selectedClass2 === "allClasses" && selectedClass2 !== selectedClass1) {
    results["top10"] = calculateResultsForClass("top10");
    results["topDividends"] = calculateResultsForClass("topDividends");
    results["fiiXP"] = calculateResultsForClass("fii");
  } else if (
    selectedClass2 !== undefined &&
    selectedClass2 !== selectedClass1
  ) {
    results[selectedClass2] = calculateResultsForClass(selectedClass2);
  }

  return results;
}

function calculateInvestmentResultsForClass(
  startingAmount,
  additionalContribution,
  classData
) {
  let investedAmount = startingAmount;
  let results = [];

  for (let i = 0; i < classData.length; i++) {
    const data = classData[i];

    const monthlyReturn = (investedAmount * data.return) / 100;

    // Adiciona o aporte adicional apenas a partir do segundo mês
    if (i > 0) {
      investedAmount += additionalContribution;
    }

    const investWithoutReturn = startingAmount + additionalContribution * i;
    const returnReturn =
      i === 0 ? monthlyReturn : monthlyReturn + results[i - 1].returnReturn;

    investedAmount += monthlyReturn;

    results.push({
      month: data.month,
      investWithoutReturn: parseFloat(investWithoutReturn.toFixed(2)),
      investedAmount: parseFloat(investedAmount.toFixed(2)),
      return: parseFloat(monthlyReturn.toFixed(2)),
      returnReturn: parseFloat(returnReturn.toFixed(2)),
      totalInvested: parseFloat((investedAmount - monthlyReturn).toFixed(2)),
      investedAmountWithoutReturns: parseFloat(
        (investedAmount - monthlyReturn - additionalContribution).toFixed(2)
      ),
    });
  }

  return results;
}

// Adicione esta função no seu código calculate.js

function consolidateResults(resultsTop10, resultsTopDividends, resultsFiiXP) {
  const consolidatedResults = [];

  for (let i = 0; i < resultsTop10.length; i++) {
    const totalInvested =
      (resultsTop10[i]?.totalInvested || 0) +
      (resultsTopDividends[i]?.totalInvested || 0) +
      (resultsFiiXP[i]?.totalInvested || 0);

    const totalReturn =
      (resultsTop10[i]?.returnReturn || 0) +
      (resultsTopDividends[i]?.returnReturn || 0) +
      (resultsFiiXP[i]?.returnReturn || 0);

    const finalValue = totalInvested + totalReturn;

    consolidatedResults.push({
      month: resultsTop10[i]?.month || resultsTopDividends[i]?.month,
      totalInvested,
      totalReturn,
      finalValue,
    });
  }

  return consolidatedResults;
}

// resultados consilidados
function calculateFinalResults(
  startingAmount,
  additionalContribution,
  selectedClass
) {
  let resultsTop10, resultsTopDividends, resultsFiiXP;

  if (selectedClass === "top10") {
    resultsTop10 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      top10XPData
    );
  } else if (selectedClass === "topDividends") {
    resultsTopDividends = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData
    );
  } else if (selectedClass === "fii") {
    resultsFiiXP = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      fiiXPData
    );
  } else if (selectedClass === "allClasses") {
    resultsTop10 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      top10XPData
    );
    resultsTopDividends = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData
    );
    resultsFiiXP = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      fiiXPData
    );

    // Consolidate results
  } else {
    return {
      error: "Invalid class selected",
    };
  }

  return {
    results:
      selectedClass === "top10"
        ? resultsTop10
        : resultsTopDividends || resultsFiiXP,
    consolidatedResults:
      selectedClass === "top10"
        ? []
        : consolidateResults(
            resultsTop10 || [],
            resultsTopDividends || [],
            resultsFiiXP || []
          ),
  };
}

export {
  calculateInvestmentResultsForClass,
  calculateInvestmentResults,
  calculateFinalResults,
  top10XPData,
  topDividendsData,
  fiiXPData,
  ifix,
  ibovespa,
};
