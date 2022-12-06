export const isArmstrongNumber = (num: number) => {
  // your code here

  let angka: number = 0;

  for (let n of num.toString().split("")) {
    angka += parseInt(n) ** num.toString().split("").length;
  }

  if (angka == num) {
    return true;
  }
  return false;
};
