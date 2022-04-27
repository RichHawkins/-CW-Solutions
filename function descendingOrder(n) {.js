function descendingOrder(n) {
    let numbers = n.toString().split('').sort((a, b) => b - a).join('')
    return +numbers


}
console.log(descendingOrder(1021))