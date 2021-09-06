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
  const { restaurantId } = req.params
  const restaurantData = restaurantsData.find(
    e => e.id === Number(restaurantId)
  )
  // 也可使用 e.id === +restaurantId
  res.render("show", { restaurantData })
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
