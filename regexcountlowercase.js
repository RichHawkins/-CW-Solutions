function lowercaseCount(str){
    let count = 0
     for( const char of str){
       if(char.match(/[a-z]/)){
         count += 1
     }  
    }
      return count 
   }