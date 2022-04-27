function sumDigits(number) {
    return Math.abs(number).toString().split('').map(x => +x).reduce((a, b) => a + b)
  }
  console.log(sumDigits(-32))