function power(base, exponent) {
    let pow = 1
    if (exponent < 0) {
        return power(base,exponent + 1)/base
    }   
    for(let i = 1; i <= exponent; i++){
      pow *= base
    }
    return pow
  }
  