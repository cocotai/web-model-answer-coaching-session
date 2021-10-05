const form = document.getElementById('form')
const input = document.getElementById('input')

form.addEventListener('submit', event => {
  event.preventDefault()
  // 建議: 不會重新賦值的變數建議使用 const 宣告
  let name = input.value
  form.innerHTML = `<h3 class="display-3">Hi, ${name}</h3>`
})