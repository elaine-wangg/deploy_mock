const BasicCSVNoHeaders = [
  [0, "Sol", 0, 0, 0],
  [1, , 282.43485, 0.00449, 5.36884],
  [2, , 43.04329, 0.00285, -15.24144],
  [3, , 277.11358, 0.02422, 223.27753],
  [3759, "96 G. Psc", 7.26388, 1.55643, 0.68697],
  [70667, "Proxima Centauri", -0.47175, -0.36132, -1.15037],
  [71454, "Rigel Kentaurus B", -0.50359, -0.42128, -1.1767],
  [71457, "Rigel Kentaurus A", -0.50362, -0.42139, -1.17665],
  [87666, "Barnard's Star", -0.01729, -1.81533, 0.14824],
  [118721, , -2.28262, 0.64697, 0.29354],
];

const BasicCSVHeaders = [
  ["State", "Data Type", "Average Weekly Earnings", "Number of Workers", "Earnings Disparity", "Employed Percent"],
  ["RI", "White", "$1,058.47", 395773.6521, "$1.00", "75%"],
  ["RI", "Black", "$770.26", 30424.80376, "$0.73", "6%"],
  ["RI", "Native American/American Indian", "$471.07", 2315.505646, "$0.45", "0%"],
  ["RI", "Asian-Pacific Islander", "$1,080.09", 18956.71657, "$1.02", "4%"],
  ["RI", "Hispanic/Latino", "$673.14", 74596.18851, "$0.64", "14%"],
  ["RI", "Multiracial", "$971.89", 8883.049171, "$0.92", "2%"],
];

const EmptyCSV = [[]];

const BadCSV = [
  [0, "Sol", 0, 0, 0],
  [1, , 282.43485, 0.00449, 5.36884, "random"],
];
