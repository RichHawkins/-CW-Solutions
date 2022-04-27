function middle(str){
    let a; 
    if (str.length % 2 === 0) {
     a = str.substring(str.length/2-1, str.length/2 + 1)
    } else {
      a = str.substring(str.length/2, str.length/2 + 1) 
    }
   return a;
}
 console.log(middle('Richard'))