export const acronym = (phrase: string) => {
  // your code here

  let array: Array<string> = [];
  let words: Array<string> = phrase.split(" ");
  for (let i = 0; i < words.length; i++) {
    array.push(words[i][0].toUpperCase());
  }

  return array.join("");
};
