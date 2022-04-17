// const value = [10,11,9,2,13,7]

// function printMax(someArr){
//      let maxNum = someArr[0]
//      for(let i=0; i<someArr.length; i++){
//            if(someArr[i]< maxNum){
//                  maxNum = someArr[i]
//            }
//      }

//      console.log(maxNum)
//      return maxNum
// }
// printMax(value)








// const names = ['Ram', 'Vinod', 'Raj']
// const classList = ['one', 'two', 'three']

// for(let i=0; i<names.length; i++){
//       const newElement = document.createElement('p')
//       newElement.innerText = names[i]
//       newElement.classList.add(classList[i],'h1-with-class')
//       const target = document.querySelector('h1')
//       target.appendChild(newElement) 
// }


// const target = document.querySelector('button')

// let count = 0
// function printName(){
//       const h1 = document.querySelector('h1')
//       h1.innerText = `${count} - clicked`
//       count = count+1
//       console.log(Geek);
// }
// target.addEventListener('click', printName)



const target = document.querySelector('button')

let count = 0
function printName(){
      const h1 = document.querySelector('h1')
      h1.innerText = `${count}-clicked`
      count=count+1

}
target.addEventListener('click',printName)

target.addEventListener('mouseover', mouseOver)
target.addEventListener('mouseover', mouseOver)

function mouseOver(){
      const h1 = document.querySelector('h1')
      h1.innerText = 'Hello'
}

function mouseOut(){
      const h1 = document.querySelector('h1')
      h1.innerText = 'hiii'
}




