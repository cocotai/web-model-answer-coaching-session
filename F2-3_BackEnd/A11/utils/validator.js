const users = require("../users")

function validateUser(email, password) {
  if (!email || !password) {
    return { status: false, message: "信箱與密碼不得為空" }
  }

  const user = users.find(user => user.email === email)

  if (!user) {
    return { status: false, message: "找不到此信箱的使用者" }
  }

  if (user.password !== password) {
    return { status: false, message: "密碼錯誤" }
  }

  return { status: true, message: "登入成功", user }
}

module.exports = validateUser
