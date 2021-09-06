const express = require("express")
const exphbs = require("express-handlebars")
const restaurantsData = require("./restaurant.json").results

const app = express()
const port = 3000

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("home", { restaurantsData })
})

app.get("/restaurants/:restaurantId", (req, res) => {
  res.render("show")
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
