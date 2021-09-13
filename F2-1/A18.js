'use strict'

// 1. 原課程內容提供程式碼使用 let，需要回報課程團隊改用 const，避免學生困惑
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

// ======第一階段 開始======
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
            <img src="${movies[i].image}" width="70" class="img-thumbnail" >
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
    // 2. 由於後面程式碼也有用 if 包起來，使得這裡的 return 其實作用不大，建議移除避免學生疑惑
    return
  }

  // delete movie
  if (targetClassList.contains('delete')) {
    targetParent.parentElement.remove()
  }
}

// 考量：先註冊監聽器再渲染畫面。若先渲染畫面，那麼在註冊監聽器之前，按鈕都沒有功能（不過渲染畫面和註冊監聽器之間的時間差，目前應該很小很小）
dataPanel.addEventListener('click', ratingAndDeleteMovie)

// 將組合好的字串傳回節點，修改內容
dataPanel.innerHTML = displayMovieList(movies)
// ======第一階段 結束======

// // ======第二階段 開始======
// // 函式
// function displayMovieList (movies) {
//   let htmlContent = `
//     <table class="table">
//       <thead>
//         <tr>
//           <th>Image</th>
//           <th>Title</th>
//           <th>Rating</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//     `
//   for (let i = 0; i < movies.length; i++) {
//     htmlContent += `
//         <tr>
//           <td>
//             <img src="${movies[i].image}" width="70" class="img-thumbnail" >
//           </td>
//           <td>${movies[i].title}</td>
//           <td>
//             <span class="fa fa-thumbs-up" data-operation="rating" data-rating="add"></span>
//             <span class="fa fa-thumbs-down px-2" data-operation="rating" data-rating="minus"></span>
//             <span>${movies[i].rating}</span>
//           </td>
//           <td>
//             <button class="btn btn-sm btn-danger" data-operation="delete">X</button>
//           </td>
//         </tr>
//       `
//   }
//   htmlContent += `
//       </tbody>
//     </table>
//   `
//   return htmlContent
// }

// // event handler
// function ratingAndDeleteMovie (event) {
//   // 3. 雖然 dataset 的做法很好，但似乎 2-2 才會教到，這部分可能也得割愛
//   // 用 dataset 比對元素
//   // 考量：class name 主要用於 css 樣式。若把專用於 javascript 的名字寫在 class name 中，若協同合作者一時不察，認為 css 沒有用到該 class name，而把 class name 刪掉，javascript 的功能也會跟著壞掉
//   const targetDataset = event.target.dataset
//   const targetParent = event.target.parentElement

//   // rating movie
//   if (targetDataset.operation === 'rating') {
//     const ratingBox = targetParent.children[2]
//     let rating = Number(ratingBox.textContent)

//     if (targetDataset.rating === 'add') {
//       rating += 1
//     } else if (rating > 0) {
//       rating -= 1
//     }
//     ratingBox.textContent = rating
//     return
//   }

//   // delete movie
//   if (targetDataset.operation === 'delete') {
//     targetParent.parentElement.remove()
//   }
// }

// dataPanel.addEventListener('click', ratingAndDeleteMovie)
// dataPanel.innerHTML = displayMovieList(movies)
// // ======第二階段 結束======
