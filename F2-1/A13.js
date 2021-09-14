'use strict'

// ======階段一 開始======
const playerRecords = document.querySelectorAll('.table tbody tr')
const thumbsUpIconHTML = '<i class="fa fa-thumbs-up"></i>'

for (let i = 0; i < playerRecords.length; i++) {
  const score = parseInt(playerRecords[i].children[1].textContent, 10)
  if (score >= 20) {
    // 使用 innerHTML 加入按讚符號
    playerRecords[i].children[0].innerHTML += thumbsUpIconHTML
  }
}
// ======階段一 結束======

// // ======階段二 開始======
// const playerRecords = document.querySelectorAll('.table tbody tr')

// for (let i = 0; i < playerRecords.length; i++) {
//   const score = parseInt(playerRecords[i].children[1].textContent, 10)
//   if (score >= 20) {
//     // 建立新的 DOM 元素，修改該元素的 class name，再把元素加到球員名字後面
//     const thumbsUpIcon = document.createElement('i')
//     thumbsUpIcon.classList.add('fa', 'fa-thumbs-up')
//     playerRecords[i].children[0].appendChild(thumbsUpIcon)
//   }
// }
// // ======階段二 結束======

// // ======階段三 開始======
// const playerRecords = document.querySelectorAll('.table tbody tr')

// // 用 for of 迴圈迭代陣列，可以直接拿到陣列元素，不需要再用 index 取出元素
// for (const record of playerRecords) {
//   const score = parseInt(record.children[1].textContent, 10)
//   if (score >= 20) {
//     const thumbsUpIcon = document.createElement('i')
//     thumbsUpIcon.classList.add('fa', 'fa-thumbs-up')
//     record.children[0].appendChild(thumbsUpIcon)
//   }
// }
// // ======階段三 結束======

// // ======階段四 開始======
// // 用函式封裝「找出得分王」的功能，函式內部的變數就不會污染全域（但還是在全域環境中增加了 findMVP 這個變數）
// function findMVP () {
//   const playerRecords = document.querySelectorAll('.table tbody tr')

//   for (const record of playerRecords) {
//     const score = parseInt(record.children[1].textContent, 10)
//     if (score >= 20) {
//       const thumbsUpIcon = document.createElement('i')
//       thumbsUpIcon.classList.add('fa', 'fa-thumbs-up')
//       record.children[0].appendChild(thumbsUpIcon)
//     }
//   }
// }

// findMVP()
// // ======階段四 結束======
