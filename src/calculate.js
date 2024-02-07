const ibovespa = [
  { month: "jun/18", return: 0.0 },
  { month: "jul/18", return: 5.76 },
  { month: "ago/18", return: -8.4 },
];

const ifix = [
  { month: "jun/18", return: 0.0 },
  { month: "jul/18", return: 92.76 },
  { month: "ago/18", return: -3.4 },
];

const top10XPData = [
  { month: "jun/18", return: 0.0 },
  { month: "jul/18", return: 9.76 },
  { month: "ago/18", return: -3.4 },
];

const topDividendsData = [
  { month: "jun/18", return: 0.0 },
  { month: "jul/18", return: 5.82 },
  { month: "ago/18", return: 0.07 },
];

const fiiXPData = [
  { month: "jun/18", return: 0.0 },
  { month: "jul/18", return: 1.23 },
  { month: "ago/18", return: -2.1 },
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
  selectedClass2,
  selectedClass3
) {
  const results = {};

  const calculateResultsForClass = (className) => {
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
    } else if (className === "allClasses") {
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
  };

  results[selectedClass1] = calculateResultsForClass(selectedClass1);
  results[selectedClass2] = calculateResultsForClass(selectedClass2);
  results[selectedClass3] = calculateResultsForClass(selectedClass3);

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
