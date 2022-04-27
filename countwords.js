function countWords(str) {
     str = str.replace(/\uFEFF/g, " ")
    return str.trim().split(' ').filter(n => n).length
}
  console.log(countWords("﻿Hello﻿World "))