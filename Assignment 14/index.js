const names = ['virat', 'ronaldo', 'messi', 'dhoni', 'rohit']

const classList = ['one', 'two', 'three', 'four', 'five']

for(let i=0; i<names.length; i++){
      const newElement = document.createElement('p')
      newElement.innerText = names[i]
      newElement.classList.add(classList[i])
      const target = document.querySelector('h1')
      target.appendChild(newElement)
}

 console.log(newElement)





// for(let i=0; i<arrHTMLElements.length; i++){
//       const newh2 = document.createElement('h2')
//       newh2.innerText = 'Dinil'
//       const newP = document.createElement('P')
//       newP.innerText = 'Jimrock'

//       arrHTMLElements[i].append(newh2, newP)
//       console.log(arrHTMLElements[i])
// }