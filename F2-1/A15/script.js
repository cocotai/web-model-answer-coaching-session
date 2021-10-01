// 提醒一下同學，本題規格有一項須特別注意：迭代物件時，分開處理姓名和分數
// 在閱讀 model answer 之前，同學們可以先思考看看，如果不使用迭代物件分開處理人名和分數，這題可以怎麼撰寫，以下提供不使用迭代物件的解法

// let players = [
//   { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
//   { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
//   { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
//   { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
//   { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
// ];

// const dataPanel = document.querySelector("#data-panel");

// function displayPlayerList(data) {
//   let htmlContent = "";

  // 利用 forEach 遍歷 players 陣列
  // 對於 forEach 還不熟悉的同學可以先前往 U63 閱讀教案
//   data.forEach(function (player) {
//     htmlContent += `
//       <tr>
//         <td>${player["name"]}</td>
//         <td><span style="font-size: 25px">${player["pts"]}</span>
//           <i class="fa fa-plus-circle up" aria-hidden="true"></i>
//           <i class="fa fa-minus-circle down" aria-hidden="true"></i>
//         </td>
//         <td><span style="font-size: 25px">${player["reb"]}</span>
//           <i class="fa fa-plus-circle up" aria-hidden="true"></i>
//           <i class="fa fa-minus-circle down" aria-hidden="true"></i>
//         </td>
//         <td><span style="font-size: 25px">${player["ast"]}</span>
//           <i class="fa fa-plus-circle up" aria-hidden="true"></i>
//           <i class="fa fa-minus-circle down" aria-hidden="true"></i>
//         </td>
//         <td><span style="font-size: 25px">${player["stl"]}</span>
//           <i class="fa fa-plus-circle up" aria-hidden="true"></i>
//           <i class="fa fa-minus-circle down" aria-hidden="true"></i>
//         </td>
//         <td><span style="font-size: 25px">${player["blk"]}</span>
//           <i class="fa fa-plus-circle up" aria-hidden="true"></i>
//           <i class="fa fa-minus-circle down" aria-hidden="true"></i>
//         </td>
//       </tr>`
//   });
//   dataPanel.innerHTML = htmlContent;
// }

// displayPlayerList(players);



// 藉由上述解法，我們可以發現如果不使用迭代物件分開處理人名和分數，會讓 template literals 裡的模板變得非常龐雜
// model answer：使用 forEach 搭配 for in 迭代物件

let players = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
];

const dataPanel = document.querySelector("#data-panel");

function displayPlayerList(data) {
  let htmlContent = "";

  // 利用 forEach 遍歷 players 陣列
  // 對於 forEach 還不熟悉的同學可以先前往 U63 閱讀教案
  data.forEach(function (player) {
    htmlContent += "<tr>";
    
    // 使用 for in 抓到 players 裡物件的屬性名稱
    // 相比前一種解法，計算分數的部分使用相同模板，變得非常簡潔
    for (let key in player) {
      if (key === "name") {
        htmlContent += `<td>${player[key]}</td>`;
      } else {
        htmlContent += `
          <td><span style="font-size: 25px">${player[key]}</span>
            <i class="fa fa-plus-circle up" aria-hidden="true"></i>
            <i class="fa fa-minus-circle down" aria-hidden="true"></i>
          </td>
        `;
      }
    };
    htmlContent += "</tr>";
  });
  dataPanel.innerHTML = htmlContent;
}

displayPlayerList(players);