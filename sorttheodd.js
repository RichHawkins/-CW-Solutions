function sortArray(array) {

    let res = []


     array.filter((el, ind)=>el % 2 && res.push(ind))
     .sort((a,b)=>a-b,0)

     .forEach((el, ind)=> array[res[ind]] = el)

    console.log(array)
    return array
}