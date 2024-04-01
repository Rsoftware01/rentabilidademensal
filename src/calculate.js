const ibovespa = [
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
  { month: "jan/24", return: 0.67 },
  { month: "fev/24", return: 0.8 },
  { month: "mar/24", return: 1.4 },
];

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
  { month: "jan/24", return: 1.0 },
  { month: "fev/24", return: 1.3 },
  { month: "mar/24", return: 1.2 },
];

const smallData = [
  { month: "mai/21", return: 8.05 },
  { month: "jun/21", return: 6.93 },
  { month: "jul/21", return: -4.88 },
  { month: "ago/21", return: 3.94 },
  { month: "set/21", return: -7.12 },
  { month: "out/21", return: -15.5 },
  { month: "nov/21", return: -0.49 },
  { month: "dez/21", return: 5.54 },
  { month: "jan/22", return: 2.21 },
  { month: "fev/22", return: 2.93 },
  { month: "mar/22", return: 8.04 },
  { month: "abr/22", return: -4.71 },
  { month: "mai/22", return: 1.66 },
  { month: "jun/22", return: -14.3 },
  { month: "jul/22", return: 7.82 },
  { month: "ago/22", return: 11.22 },
  { month: "set/22", return: 0.97 },
  { month: "out/22", return: 13.41 },
  { month: "nov/22", return: -14.3 },
  { month: "dez/22", return: 2.71 },
  { month: "jan/23", return: 8.26 },
  { month: "fev/23", return: -6.21 },
  { month: "mar/23", return: -5.84 },
  { month: "abr/23", return: 1.77 },
  { month: "mai/23", return: 14.31 },
  { month: "jun/23", return: 10.08 },
  { month: "jul/23", return: 7.55 },
  { month: "ago/23", return: -4.05 },
  { month: "set/23", return: -0.86 },
  { month: "out/23", return: -9.46 },
  { month: "nov/23", return: 13.47 },
  { month: "dez/23", return: 9.18 },
  { month: "jan/24", return: -0.63 },
];

const bunkerData = [
  { month: "nov/21", return: 2.32 },
  { month: "dez/21", return: -0.17 },
  { month: "jan/22", return: 4.49 },
  { month: "fev/22", return: 0.23 },
  { month: "mar/22", return: 12.04 },
  { month: "abr/22", return: -3.24 },
  { month: "mai/22", return: 1.31 },
  { month: "jun/22", return: -8.57 },
  { month: "jul/22", return: 3.7 },
  { month: "ago/22", return: 3.07 },
  { month: "set/22", return: -2.91 },
  { month: "out/22", return: 7.67 },
  { month: "nov/22", return: -6.28 },
  { month: "dez/22", return: -0.44 },
  { month: "jan/23", return: 1.57 },
  { month: "fev/23", return: -4.66 },
  { month: "mar/23", return: 5.4 },
  { month: "abr/23", return: 4.36 },
  { month: "mai/23", return: -1.67 },
  { month: "jun/23", return: 8.18 },
  { month: "jul/23", return: 1.57 },
  { month: "ago/23", return: -2.98 },
  { month: "set/23", return: 2.29 },
  { month: "out/23", return: -1.23 },
  { month: "nov/23", return: 12.74 },
  { month: "dez/23", return: 5.13 },
  { month: "jan/24", return: -5.23 },
];

const topDividendsPlus = [
  { month: "abr/22", return: -5.54 },
  { month: "mai/22", return: 3.5 },
  { month: "jun/22", return: -12.0 },
  { month: "jul/22", return: 11.22 },
  { month: "ago/22", return: 12.9 },
  { month: "set/22", return: 4.79 },
  { month: "out/22", return: 1.01 },
  { month: "nov/22", return: -1.81 },
  { month: "dez/22", return: -0.75 },
  { month: "jan/23", return: 8.03 },
  { month: "fev/23", return: -9.2 },
  { month: "mar/23", return: -4.86 },
  { month: "abr/23", return: 7.28 },
  { month: "mai/23", return: 11.12 },
  { month: "jun/23", return: 12.41 },
  { month: "jul/23", return: 3.58 },
  { month: "ago/23", return: -0.44 },
  { month: "set/23", return: 2.96 },
  { month: "out/23", return: -3.8 },
  { month: "nov/23", return: 9.16 },
  { month: "dez/23", return: 8.49 },
  { month: "jan/24", return: -0.02 },
  { month: "fev/24", return: 2.99 },
  { month: "mar/24", return: -2.7 },
];

const startingMonths = [
  "jun/18",
  "jul/18",
  "ago/18",
  "set/18",
  "out/18",
  "nov/18",
  "dez/18",
  "jan/19",
  "fev/19",
  "mar/19",
  "abr/19",
  "mai/19",
  "jun/19",
  "jul/19",
  "ago/19",
  "set/19",
  "out/19",
  "nov/19",
  "dez/19",
  "jan/20",
  "fev/20",
  "mar/20",
  "abr/20",
  "mai/20",
  "jun/20",
  "jul/20",
  "ago/20",
  "set/20",
  "out/20",
  "nov/20",
  "dez/20",
  "jan/21",
  "fev/21",
  "mar/21",
  "abr/21",
  "mai/21",
  "jun/21",
  "jul/21",
  "ago/21",
  "set/21",
  "out/21",
  "nov/21",
  "dez/21",
  "jan/22",
  "fev/22",
  "mar/22",
  "abr/22",
  "mai/22",
  "jun/22",
  "jul/22",
  "ago/22",
  "set/22",
  "out/22",
  "nov/22",
  "dez/22",
  "jan/23",
  "fev/23",
  "mar/23",
  "abr/23",
  "mai/23",
  "jun/23",
  "jul/23",
  "ago/23",
  "set/23",
  "out/23",
  "nov/23",
  "dez/23",
  "jan/24",
  "fev/24",
  "mar/24",
];

const finalMonths = [
  "jun/18",
  "jul/18",
  "ago/18",
  "set/18",
  "out/18",
  "nov/18",
  "dez/18",
  "jan/19",
  "fev/19",
  "mar/19",
  "abr/19",
  "mai/19",
  "jun/19",
  "jul/19",
  "ago/19",
  "set/19",
  "out/19",
  "nov/19",
  "dez/19",
  "jan/20",
  "fev/20",
  "mar/20",
  "abr/20",
  "mai/20",
  "jun/20",
  "jul/20",
  "ago/20",
  "set/20",
  "out/20",
  "nov/20",
  "dez/20",
  "jan/21",
  "fev/21",
  "mar/21",
  "abr/21",
  "mai/21",
  "jun/21",
  "jul/21",
  "ago/21",
  "set/21",
  "out/21",
  "nov/21",
  "dez/21",
  "jan/22",
  "fev/22",
  "mar/22",
  "abr/22",
  "mai/22",
  "jun/22",
  "jul/22",
  "ago/22",
  "set/22",
  "out/22",
  "nov/22",
  "dez/22",
  "jan/23",
  "fev/23",
  "mar/23",
  "abr/23",
  "mai/23",
  "jun/23",
  "jul/23",
  "ago/23",
  "set/23",
  "out/23",
  "nov/23",
  "dez/23",
  "jan/24",
  "fev/24",
  "mar/24",
];

function filterDataByMonths(data, startingMonth, finalMonth) {
  const startingIndex = startingMonths.indexOf(startingMonth);
  const finalIndex = finalMonths.indexOf(finalMonth);

  if (startingIndex === -1 || finalIndex === -1 || finalIndex < startingIndex) {
    console.error("Erro ao filtrar os dados: meses selecionados inválidos.");
    return [];
  }

  return data.filter((entry) => {
    const monthIndex = startingMonths.indexOf(entry.month);
    return monthIndex >= startingIndex && monthIndex <= finalIndex;
  });
}

function calculateInvestmentResults(
  startingAmount,
  additionalContribution,
  selectedClass1,
  selectedClass2,
  startingMonth,
  finalMonth
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
    } else if (className === "small") {
      selectedData = smallData;
    } else if (className === "bunker") {
      selectedData = bunkerData;
    } else if (className === "topDividendsPlus") {
      selectedData = topDividendsPlus;
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
      selectedData,
      startingMonth,
      finalMonth
    );

    console.log("Acesso feito com sucesso ao array dos dados:", result);
    return result;
  };

  if (selectedClass1 === "allClasses") {
    results["top10"] = calculateResultsForClass("top10");
    results["topDividends"] = calculateResultsForClass("topDividends");
    results["fiiXP"] = calculateResultsForClass("fii");
    results["small"] = calculateResultsForClass("small");
    results["bunker"] = calculateResultsForClass("bunker");
    results["topDividendsPlus"] = calculateResultsForClass("topDividendsPlus");
  } else if (selectedClass1 !== undefined) {
    results[selectedClass1] = calculateResultsForClass(selectedClass1);
  }

  if (selectedClass2 === "allClasses" && selectedClass2 !== selectedClass1) {
    results["top10"] = calculateResultsForClass("top10");
    results["topDividends"] = calculateResultsForClass("topDividends");
    results["fiiXP"] = calculateResultsForClass("fii");
    results["small"] = calculateResultsForClass("small");
    results["bunker"] = calculateResultsForClass("bunker");
    results["topDividendsPlus"] = calculateResultsForClass("topDividendsPlus");
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
  classData,
  startingMonth,
  finalMonth
) {
  // Filtra os dados da classe com base nos meses selecionados
  const filteredData = filterDataByMonths(classData, startingMonth, finalMonth);
  const inicial = startingAmount;

  let investedAmount = startingAmount;
  let results = [];

  // Adiciona o mês especial "GEGE" como mês zero
  results.push({
    month: "",
    portfolioMonth: 0,
    investWithoutReturn: parseFloat(startingAmount.toFixed(2)),
    inicial: parseFloat(startingAmount.toFixed(2)),
    investedAmount: parseFloat(startingAmount.toFixed(2)),
    return: 0,
    returnReturn: 0,
    totalInvested: parseFloat(startingAmount.toFixed(2)),
    investedAmountWithoutReturns: parseFloat(startingAmount.toFixed(2)),
    monthsToReturn: 0,
  });

  for (let i = 0; i < filteredData.length; i++) {
    const data = filteredData[i]; // Obtém os dados do mês atual na iteração

    let monthlyReturn;

    // Caso contrário, calcula o retorno normalmente
    monthlyReturn = (investedAmount * data.return) / 100;

    // Adiciona o aporte adicional apenas a partir do segundo mês

    investedAmount += additionalContribution;

    const investWithoutReturn =
      startingAmount + additionalContribution + additionalContribution * i; // Calcula o investimento sem o retorno
    const returnReturn =
      i === 0 ? monthlyReturn : monthlyReturn + results[i].returnReturn; // Calcula o retorno acumulado até o mês atual

    investedAmount += monthlyReturn; // Atualiza o montante investido com o retorno mensal

    // Calcula os meses para retornar o investimento
    const monthsToReturn = returnReturn !== 0 ? i / returnReturn : 0;
    // Formata para manter apenas duas casas decimais
    const formattedMonthsToReturn = parseFloat(monthsToReturn.toFixed(2));

    // Adiciona os resultados do mês atual ao array de resultados
    results.push({
      month: data.month, // Mês da classe
      portfolioMonth: startingMonths[i], // Mês correspondente da carteira
      investWithoutReturn: parseFloat(investWithoutReturn.toFixed(2)), // Investimento sem retorno
      inicial: parseFloat(startingAmount.toFixed(2)), // Investimento inicial
      investedAmount: parseFloat(investedAmount.toFixed(2)), // Montante investido
      return: parseFloat(monthlyReturn.toFixed(2)), // Retorno mensal
      returnReturn: parseFloat(returnReturn.toFixed(2)), // Retorno acumulado
      totalInvested: parseFloat((investedAmount - monthlyReturn).toFixed(2)), // Investimento total menos o retorno
      investedAmountWithoutReturns: parseFloat(
        (investedAmount - monthlyReturn - additionalContribution).toFixed(2)
      ), // Montante investido sem considerar os retornos
      monthsToReturn: formattedMonthsToReturn, // Meses para retornar o investimento
    });
  }

  return results;
}

function calculateFinalResults(
  startingAmount,
  additionalContribution,
  selectedClass1,
  selectedClass2,
  startingMonth,
  finalMonth
) {
  let results1, results2;

  if (selectedClass1 === "top10") {
    results1 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      top10XPData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass1 === "topDividends") {
    results1 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass1 === "small") {
    results1 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass1 === "topDividendsPlus") {
    results1 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass1 === "bunker") {
    results1 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass1 === "fii") {
    results1 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      fiiXPData,
      startingMonth,
      finalMonth
    );
  } else {
    return {
      error: "Invalid class selected for selectedClass1",
    };
  }

  if (selectedClass2 === "top10") {
    results2 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      top10XPData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass2 === "topDividends") {
    results2 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass2 === "topDividendsPlus") {
    results1 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass2 === "small") {
    results2 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      topDividendsData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass2 === "fii") {
    results2 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      fiiXPData,
      startingMonth,
      finalMonth
    );
  } else if (selectedClass2 === "bunker") {
    results2 = calculateInvestmentResultsForClass(
      startingAmount,
      additionalContribution,
      fiiXPData,
      startingMonth,
      finalMonth
    );
  } else {
    return {
      error: "Invalid class selected for selectedClass2",
    };
  }

  return {
    results: { selectedClass1: results1, selectedClass2: results2 },
    consolidatedResults: [],
  };
}

export {
  calculateInvestmentResultsForClass,
  calculateInvestmentResults,
  calculateFinalResults,
  top10XPData,
  topDividendsData,
  fiiXPData,
  smallData,
  ifix,
  ibovespa,
  bunkerData,
  topDividendsPlus,
};
