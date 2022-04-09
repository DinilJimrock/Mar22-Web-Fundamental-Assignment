const DJ = [9,10,5,10,3,8]

function printMax(someArray){
      let maxNunm = someArray[0]
      for(let i=0; i<someArray.length; i++){
            if(someArray[i]>maxNunm){
                  maxNunm = someArray[i]
            }
      }
      console.log(maxNunm)
      return maxNunm
}

printMax(DJ)





/****************************************************/

// // find the third index in given array (1,0,3,5,8)


// const arr = [1,0,3,5,8]

// console.log(arr[3])