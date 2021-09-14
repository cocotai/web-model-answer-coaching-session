'use strict'

// 資料
const movies = [{
  title: 'The Avengers',
  image: 'https://assets-lighthouse.alphacamp.co/uploads/image/file/15305/TheAvengersPoster.jpg',
  rating: 0
},
{
  title: 'Our Times',
  image: 'https://assets-lighthouse.alphacamp.co/uploads/image/file/15304/OurtimesPoster.jpeg',
  rating: 0
},
{
  title: 'Aquaman',
  image: 'https://assets-lighthouse.alphacamp.co/uploads/image/file/15303/AquamanPoster.jpg',
  rating: 0
}]

// 選取節點
const dataPanel = document.querySelector('#data-panel')

// 函式
function displayMovieList (movies) {
  let htmlContent = `
    <table class="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
    `
  for (let i = 0; i < movies.length; i++) {
    htmlContent += `
        <tr>
          <td>
            <img src="${movies[i].image}" width="70" class="img-thumbnail">
          </td>
          <td>${movies[i].title}</td>
          <td>
            <span class="fa fa-thumbs-up thumbs"></span>
            <span class="fa fa-thumbs-down px-2 thumbs"></span>
            <span>${movies[i].rating}</span>
          </td>
          <td>
            <button class="btn btn-sm btn-danger delete">X</button>
          </td>
        </tr>
      `
  }
  htmlContent += `
      </tbody>
    </table>
  `
  return htmlContent
}

function ratingAndDeleteMovie (event) {
  // 用 class name 比對元素
  const targetClassList = event.target.classList
  const targetParent = event.target.parentElement

  // rating movie
  if (targetClassList.contains('thumbs')) {
    const ratingBox = targetParent.children[2]
    let rating = Number(ratingBox.textContent)

    if (targetClassList.contains('fa-thumbs-up')) {
      rating += 1
    } else if (rating > 0) {
      rating -= 1
    }
    ratingBox.textContent = rating

    // delete movie
  } else if (targetClassList.contains('delete')) {
    targetParent.parentElement.remove()
  }
}

// 考量：先註冊監聽器再渲染畫面。若先渲染畫面，那麼在註冊監聽器之前，按鈕都沒有功能（不過渲染畫面和註冊監聽器之間的時間差，目前應該很小很小）
dataPanel.addEventListener('click', ratingAndDeleteMovie)

// 將組合好的字串傳回節點，修改內容
dataPanel.innerHTML = displayMovieList(movies)
