const img = document.querySelector('.dog-image')

axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
  console.log(response.data)
  img.src = response.data.message
})
