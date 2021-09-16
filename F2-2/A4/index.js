// 階段一
// 初始變數
const listArea = document.querySelector("#list-area");
const list = document.querySelector("#my-todo");
const doneList = document.querySelector("#done-list");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");

// 資料
// 建議1. 變數 todos、todo、newItem 這些沒有要重新賦值的變數都建議使用 const 宣告，不過由於這個修改會牽扯到 2-1 的教案內容，如果不可行的話，單獨修改本作業起手式程式碼範例亦可。
// 已修正
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  if (!text.length) return
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

function addDoneItem(text) {
  const newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="done" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  doneList.appendChild(newItem);
}

// Create
addBtn.addEventListener("click", function () {
  // 建議2. 建議此處讓 inputValue = input.value.trim()，雖然前後有空格的文字放入 HTML 後畫面上依然不會顯示空格，因此實際執行結果並無差異，但針對驗證後的資料處理（addItem）會是較為合理的方式，階段二亦同。
  const inputValue = input.value.trim()
  addItem(inputValue);
  // 功能1：透過trim()防止產生空白 todo。
  // 建議3. 優化體驗立意良好，但 model answer 建議以 Meets Expectation 為主，優化交由學生發想較為恰當，階段二亦同。不過警告樣式確實有出現在題目的圖片中，可以討論是否正式加入規格文字中。
  // 暫時移除優化部分
});
// 功能2：當使用者在 input#newTodo 裡按下 Enter 鍵時，可以新增 to-do。
input.addEventListener("keypress", function (event) {
  const inputValue = input.value.trim()

  if (event.key === "Enter") {
    addItem(inputValue);
  }
});

// Delete and check
// 功能3：當使用者點擊完成的 todo 時，該項目會被送進 Done 清單；同時，​Done 清單中的項目也要能夠被刪除
listArea.addEventListener("click", function (event) {
  const target = event.target;
  const parentElement = target.parentElement;

  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    if (!target.classList.contains("checked")) {
      addDoneItem(target.innerText)
      parentElement.remove()
    }
    // 建議4. 同 3，擴充規格建議交由學生發想較為恰當，階段二亦同。
    // 擴充規格參考：Done 清單裡面的項目能夠被使用者還原回 Todo 清單中
    // 暫時先移除優化部分
  }
});

// // 建議5. addItem() 和 addDoneItem() 其實也長得很像，建議運用參數傳入目的地、class，將兩者合併為一個函式，更能凸顯出函式包裝的益處。
// // 階段二：函式包裝
// // 初始變數
// const listArea = document.querySelector("#list-area");
// const list = document.querySelector("#my-todo");
// const doneList = document.querySelector("#done-list");
// const addBtn = document.querySelector("#add-btn");
// const input = document.querySelector("#new-todo");

// // 資料
// const todos = [
//   "Hit the gym",
//   "Read a book",
//   "Buy eggs",
//   "Organize office",
//   "Pay bills"
// ];

// for (let todo of todos) {
//   addItem(todo);
// }

// // 函式
// // 合併addItem() 和 addDoneItem()函式
// function addItem(text, listName) {
//   if (!text.length) return
//   const newItem = document.createElement("li");
//   let className = ''

//   if (listName === doneList) {
//     className = 'checked'
//   } else {
//     listName = list
//   }
//   newItem.innerHTML = `
//     <label for="todo" class="${className}">${text}</label>
//     <i class="delete fa fa-trash"></i>
//   `;
//   listName.appendChild(newItem);
// }

// function createItem(input) {
//   const inputValue = input.value.trim();
//   addItem(inputValue);
// }

// // Create
// addBtn.addEventListener("click", function () {
//   createItem(input)
// });
// // 功能2：當使用者在 input#newTodo 裡按下 Enter 鍵時，可以新增 to-do。
// input.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     createItem(input)
//   }
// });

// // Delete and check
// // 功能3：當使用者點擊完成的 todo 時，該項目會被送進 Done 清單；同時，​Done 清單中的項目也要能夠被刪除
// listArea.addEventListener("click", function (event) {
//   const target = event.target;
//   const parentElement = target.parentElement;

//   if (target.classList.contains("delete")) {
//     parentElement.remove();
//   } else if (target.tagName === "LABEL") {
//     if (!target.classList.contains("checked")) {
//       // 建議6. 其實 appendChild() 本身就有移動既有元素的功能，不用手動 add 再 remove，建議可以拉出階段三，藉由 appendChild() 本身的功能再優化程式碼品質。
//       // 先移除優化的部分
//       addItem(target.innerText, doneList)
//       parentElement.remove()
//     }
//   }
// });

// // 階段三：利用appendChild()達成優化功能
// // 初始變數
// const listArea = document.querySelector("#list-area");
// const list = document.querySelector("#my-todo");
// const doneList = document.querySelector("#done-list");
// const addBtn = document.querySelector("#add-btn");
// const input = document.querySelector("#new-todo");

// // 資料
// const todos = [
//   "Hit the gym",
//   "Read a book",
//   "Buy eggs",
//   "Organize office",
//   "Pay bills"
// ];

// for (let todo of todos) {
//   addItem(todo);
// }

// // 函式
// function addItem(text) {
//   if (!text.length) return
//   const newItem = document.createElement("li");
//   newItem.innerHTML = `
//     <label for="todo">${text}</label>
//     <i class="delete fa fa-trash"></i>
//   `;
//   list.appendChild(newItem);
// }

// function createItem(input) {
//   const inputValue = input.value.trim();
//   addItem(inputValue);
// }

// // Create
// addBtn.addEventListener("click", function () {
//   createItem(input)
// });
// // 功能2：當使用者在 input#newTodo 裡按下 Enter 鍵時，可以新增 to-do。
// input.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     createItem(input)
//   }
// });

// // Delete and check
// // 功能3：當使用者點擊完成的 todo 時，該項目會被送進 Done 清單；同時，​Done 清單中的項目也要能夠被刪除
// listArea.addEventListener("click", function (event) {
//   const target = event.target;
//   const parentElement = target.parentElement;

//   if (target.classList.contains("delete")) {
//     parentElement.remove();
//   } else if (target.tagName === "LABEL") {
//     if (!target.classList.contains("checked")) {
//       // 建議6. 其實 appendChild() 本身就有移動既有元素的功能，不用手動 add 再 remove，建議可以拉出階段三，藉由 appendChild() 本身的功能再優化程式碼品質。
//       //利用appendChild()實現區塊間的移動
//       doneList.appendChild(parentElement)
//       target.classList.toggle('checked')
//     }
//   }
// });