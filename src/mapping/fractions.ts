const FRACTIONS = [
  [".25", "F"],
  [".10", "s"],
  [".20", "J"],
  [".30", "u"],
  [".33", "C"],
  [".40", "K"],
  [".50", "A"],
  [".60", "L"],
  [".66", "D"],
  [".70", "y"],
  [".75", "H"],
  [".80", "M"],
  [".90", "{"],
  [".83", "S"],
  [".14", "U"],
  [".28", "V"],
  [".42", "W"],
  [".57", "X"],
  [".71", "Y"],
  [".85", "Z"],
  [".12", "b"],
  [".37", "d"],
  [".62", "f"],
  [".87", "h"],
  [".11", "j"],
  [".22", "k"],
  [".44", "m"],
  [".55", "n"],
  [".77", "p"],
  [".88", "q"],
];

export function getInteger(value) {
  return Math.floor(value);
}

export function getFraction(value) {
  if (!value) return null;
  const valueStr: string = value.toFixed(2);
  for (const [key, fraction] of FRACTIONS) {
    if (valueStr.endsWith(key)) return fraction;
  }

  return null;
}
