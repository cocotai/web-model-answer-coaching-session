// 階段一
// 初始變數
const listArea = document.querySelector("#list-area");
const list = document.querySelector("#my-todo");
const doneList = document.querySelector("#done-list");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");

// 資料
let todos = [
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
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

function addDoneItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="done" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  doneList.appendChild(newItem);
}

// Create
addBtn.addEventListener("click", function () {
  const inputValue = input.value;

  // 功能1：透過trim()防止產生空白 todo。
  if (inputValue.trim().length > 0) {
    addItem(inputValue);
    // 優化使用者體驗：新增完成後清空輸入框
    input.value = ''
    // 優化使用者體驗：新增警告機制
    input.classList.remove("is-invalid")
  } else {
    input.classList.add("is-invalid")
  }
});
// 功能2：當使用者在 input#newTodo 裡按下 Enter 鍵時，可以新增 to-do。
input.addEventListener("keypress", function (event) {
  const inputValue = input.value;

  if (event.key === "Enter") {
    if (inputValue.trim().length > 0) {
      addItem(inputValue);
      input.value = ''
      input.classList.remove("is-invalid")
    } else {
      input.classList.add("is-invalid")
    }
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
    } else {
      // 擴充規格參考：Done 清單裡面的項目能夠被使用者還原回 Todo 清單中
      addItem(target.innerText)
      parentElement.remove()
    }
  }
});

// // 階段二：函式包裝
// // 初始變數
// const listArea = document.querySelector("#list-area");
// const list = document.querySelector("#my-todo");
// const doneList = document.querySelector("#done-list");
// const addBtn = document.querySelector("#add-btn");
// const input = document.querySelector("#new-todo");

// // 資料
// let todos = [
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
//   let newItem = document.createElement("li");
//   newItem.innerHTML = `
//     <label for="todo">${text}</label>
//     <i class="delete fa fa-trash"></i>
//   `;
//   list.appendChild(newItem);
// }

// function addDoneItem(text) {
//   let newItem = document.createElement("li");
//   newItem.innerHTML = `
//     <label for="done" class="checked">${text}</label>
//     <i class="delete fa fa-trash"></i>
//   `;
//   doneList.appendChild(newItem);
// }

// function createItem(input) {
//   const inputValue = input.value;

//   if (inputValue.trim().length > 0) {
//     addItem(inputValue);
//     input.value = ''
//     input.classList.remove("is-invalid")
//   } else {
//     input.classList.add("is-invalid")
//   }
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
//       addDoneItem(target.innerText)
//       parentElement.remove()
//     } else {
//       //擴充規格參考：Done 清單裡面的項目能夠被使用者還原回 Todo 清單中
//       addItem(target.innerText)
//       parentElement.remove()
//     }
//   }
// });
