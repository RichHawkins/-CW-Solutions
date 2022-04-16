function betterThanAverage(classPoints, yourPoints) {
    const startingValue = 0
    const classSum = classPoints.reduce((a,b) => a + b, startingValue)
    const classAverage = classSum / classPoints.length  
    return classAverage < yourPoints
}