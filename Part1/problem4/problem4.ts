export const isPangram = (texts: string) => {
  // your code here
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz";
  let alphabetUsed = new Set();

  for (let char of texts) {
    if (
      alphabet.includes(char.toLowerCase()) ||
      alphabet.includes(char.toUpperCase())
    ) {
      alphabetUsed.add(char.toLowerCase());
    }
  }

  if (alphabetUsed.size == alphabet.length) {
    return true;
  }
  return false;
};
