export const decryptAtbash = (cipherText: string) => {
  // your code here

  let decryption: Array<string> = [];
  const wordAlphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < cipherText.split("").length; i++) {
    if (wordAlphabet.includes(cipherText[i].toUpperCase())) {
      const order: number = wordAlphabet.indexOf(cipherText[i].toUpperCase());
      if (wordAlphabet[order] == cipherText[i]) {
        decryption.push(wordAlphabet[wordAlphabet.length - 1 - (order % 26)]);
      } else {
        decryption.push(
          wordAlphabet[wordAlphabet.length - 1 - (order % 26)].toLowerCase()
        );
      }
    }
  }

  return decryption.join("");
};
