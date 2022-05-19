let answer = ''
function position(letter) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    alphabet = alphabet.split('')
    alphabet.forEach((el, ind) => {
        if (el === letter) {
         answer =  `Position of alphabet:${ind + 1} `
        }
    })
    
    return answer
}
