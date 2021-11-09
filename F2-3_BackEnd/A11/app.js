const app = require("express")()
const express = require("express")
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.urlencoded({ extended: true }))

const PORT = 3000

const validateUser = require("./utils/validator")

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/", (req, res) => {
  const { email, password } = req.body
  const result = validateUser(email, password)

  if (!result.status) {
    return res.render("index", { error: result.message })
  }

  return res.render("home", { user: result.user.firstName })
})

app.listen(PORT, () => {
  console.log(`Server Up! Listening on http://localhost:${PORT}`)
})
