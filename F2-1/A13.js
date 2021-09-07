'use strict';

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
// const playerRecords = document.querySelectorAll('.table tbody tr')

// // 用 forEach 迭代陣列，可以直接拿到陣列元素，不需要再用 index 取出元素。
// playerRecords.forEach(function (record) {
//   const score = parseInt(record.children[1].textContent, 10)
//   if (score >= 20) {
//     const thumbsUpIcon = document.createElement('i')
//     thumbsUpIcon.classList.add('fa', 'fa-thumbs-up')
//     record.children[0].appendChild(thumbsUpIcon)
//   }
// })
// // ======階段四 結束======

// // ======階段五 開始======
// const playerRecords = document.querySelectorAll('.table tbody tr')

// // 使用箭頭函式。
// playerRecords.forEach(record => {
//   const score = parseInt(record.children[1].textContent, 10)
//   if (score >= 20) {
//     const thumbsUpIcon = document.createElement('i')
//     thumbsUpIcon.classList.add('fa', 'fa-thumbs-up')
//     record.children[0].appendChild(thumbsUpIcon)
//   }
// })
// // ======階段五 結束======

// // ======階段六 開始======
// // 用函式封裝「找出得分王」的功能，函式內部的變數就不會污染全域（但還是在全域環境中增加了 findMVP 這個變數）
// function findMVP () {
//   const playerRecords = document.querySelectorAll('.table tbody tr')

//   playerRecords.forEach(record => {
//     const score = parseInt(record.children[1].textContent, 10)
//     if (score >= 20) {
//       const thumbsUpIcon = document.createElement('i')
//       thumbsUpIcon.classList.add('fa', 'fa-thumbs-up')
//       record.children[0].appendChild(thumbsUpIcon)
//     }
//   })
// }

// findMVP()
// // ======階段六 結束======

// // ======階段七 開始======
// // 使用立即執行函式（Immediately Invoked Functions Expressions，IIFE），沒有在全域環境中增加任何變數
// // 立即執行函式參考資料：https://ithelp.ithome.com.tw/articles/10193313
// (function () {
//   const playerRecords = document.querySelectorAll('.table tbody tr')

//   playerRecords.forEach(record => {
//     const score = parseInt(record.children[1].textContent, 10)
//     if (score >= 20) {
//       const thumbsUpIcon = document.createElement('i')
//       thumbsUpIcon.classList.add('fa', 'fa-thumbs-up')
//       record.children[0].appendChild(thumbsUpIcon)
//     }
//   })
// }())
// // ======階段七 結束======

/*
如果你在開開關關註解的過程中，出現「TypeError: XXX is not a function」，而且此時階段六的程式碼沒有被註解掉，可能的解決方式：在階段六程式碼上方，找到離階段六最近而且未被註解掉的程式碼，在那行程式碼最右邊加上分號

此錯誤發生原因：呼叫函式時是用小括號，而 IIFE 最外層正巧是用小括號包起來。若 IIFE 前方的程式碼沒有加分號，javascript 會把前後方的程式碼無縫連接起來，以為前方的程式碼是函式，而我們在用 IIFE 的小括號呼叫該函式
*/
