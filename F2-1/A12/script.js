// 更改圖片
document.querySelector('.my-card img').src = 
"https://avatars2.githubusercontent.com/u/3960142?s=400&v=4"

// 更改自介
document.querySelector(".info").textContent = "Hi, this is Sam Lin!"

// 更改姓名
document.querySelector('.my-name').innerHTML = "Sam Lin"

// 選取經驗 ul 節點
const ul = document.querySelector('ul')

// 更改經驗
ul.innerHTML = `
  <li>Project manager @pubGame</li>
  <li>Web #10 @Alpha Camp</li>
  <li>Software Engineer @GGV</li>
  <li>Software Engineer @Crypto.com</li>
`

// 更改經驗部分可以使用方法二
// 運用 createElement 和 appendChild

// const ul = document.querySelector('ul')
// const experiences = ['Project manager @pubGame', 'Web #10 @Alpha Camp', 'Software Enginner @GGV', 'Software Engineer @Crypto.com']

// for (let i = 0; i < experiences.length; i++) {
//   let atom = document.createElement('li')
//   atom.innerText = experiences[i]
//   ul.appendChild(atom)
// }