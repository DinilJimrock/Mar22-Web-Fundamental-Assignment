// const Dinil = [2,4,7,8,9,22,5]

// function printMax(someArray){
//       let maxNum = someArray[0]
//       for(let i=0; i<someArray.length; i++){
//             if(someArray[i]>maxNum){
//                   maxNum = someArray[i]
//             }
//       }
//       console.log(maxNum)
//       return maxNum
// }

// printMax(Dinil)



// /**********************************************/

// const Jimrock = [9,10,5,7,1,2]


// function printMin(someArray){
//       let minNum = someArray[0]
//       for(let i=0; i<someArray.length; i++){
//             if(someArray[i]<minNum){
//                   minNum = someArray[i]
//             }
//       }
//       console.log(minNum)
//       return minNum
// }

// printMin(Jimrock)



/***********************Assingment***************************/


//Take 3 inputs (number ) from the user and show minimum of the three.

const value = [10,12,9]

function printNum(someArray){
      let minNum = someArray[0]
      for(let i=0; i<someArray.length; i++){
            if(someArray[i]<minNum){
                  minNum = someArray[i]
            }
      }

      console.log(minNum)
      return minNum
}

printNum(value)