const app = require("express")()
const express = require("express")
const exphbs = require("express-handlebars")
const cookieParser = require("cookie-parser")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const PORT = 3000

const validateUser = require("./utils/validator")

// 登入頁面 if 登入過就轉到home頁面
app.get("/", (req, res) => {
  if (req.cookies.user) {
    res.redirect("/home")
  }
  return res.render("index")
})

// 發送登入資料並儲存狀態 via cookie
app.post("/", (req, res) => {
  const { email, password } = req.body
  const result = validateUser(email, password)

  if (!result.status) {
    return res.render("index", { error: result.message })
  }

  res.cookie("user", { email, password }, { maxAge: 1000 * 60 * 60 * 24 })
  return res.redirect("/home")
})

// home頁面 if 沒登入狀態就轉到登入頁面
// 狀態過期則會清除cookie並轉到登入頁面
app.get("/home", (req, res) => {
  console.log(req.cookies)
  if (!req.cookies.user) {
    res.redirect("/")
  }

  const { email, password } = req.cookies.user
  const result = validateUser(email, password)
  if (!result.status) {
    res.clearCookie("user")
    return res.redirect("/")
  }

  return res.render("home", { user: result.user.firstName })
})

app.listen(PORT, () => {
  console.log(`Server Up! Listening on http://localhost:${PORT}`)
})
