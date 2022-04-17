document.querySelector('h1').innerHTML = ` <img class="normal-size" src="https://reqres.in/img/faces/9-image.jpg"/>`
 const imageElement = document.querySelector('.normal-size')

 imageElement.addEventListener('mouseover', increaseSize)
 
 function increaseSize(){
       imageElement.classList = 'large-size'
       imageElement.classList.add('large-size')
       imageElement.classList.remove('normal-size')
 }

 imageElement.addEventListener('mouseout', decreaseSize)

 function decreaseSize(){
       imageElement.classList = 'normal-size'
       imageElement.classList.add('normal-size')
       imageElement.classList.remove('large-size')
 }
// class = 'large-size norma-size'