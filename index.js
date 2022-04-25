const somePromise = fetch(' https://reqres.in/api/users?page=2')

somePromise
      .then(data => data.json())
      .then(result => {
            const userArr = result.data

            for (let i=0; i<userArr.length; i++){
                  const newElement1 = document.createElement('p')
                  newElement1.innerText = userArr[i].email
                  document.querySelector('h2').appendChild(newElement1)
                  const newElement2 = document.createElement('span')
                  newElement2.innerText = userArr[i].first_name+" "
                  const newElement3 = document.createElement('span')
                  newElement3.innerText = userArr[i].last_name
                  document.querySelector('h2').appendChild(newElement2)
                  document.querySelector('h2').appendChild(newElement3)
                  const image = document.createElement('img')
                  image.src = userArr[i].avatar
                  document.querySelector('h2').appendChild(image)
                  
            }
      })
      .catch(error => console.log('got some error - ', error))