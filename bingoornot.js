function bingo(a) {
    let thatsBingo = [2,9,14,7,15]
    return thatsBingo.every(x => a.includes(x)) ? "WIN" : "LOSE"
}

