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

app.get("/search", (req, res) => {
  //第一種方法，簡易搜尋：純尋找關鍵字
  const keyword = req.query.keyword.toLowerCase()
  const filterRestaurantsData = restaurantsData.filter(
    data =>
      data.name.toLowerCase().includes(keyword.trim()) ||
      data.category.toLowerCase().includes(keyword.trim())
  )

  // 第二種方法，模擬實際搜尋引擎搜尋，使用者可以加入空格來過濾更多
  // 如：搜尋時輸入「義式 啤酒」，只會顯示同時有義式與啤酒的餐廳
  // const keywords = req.query.keyword.toLowerCase().split(" ")
  // const filterRestaurantsData = restaurantsData.filter(data =>
  //   keywords.every(
  //     keyword =>
  //       data.category.includes(keyword) ||
  //       data.name.toLowerCase().includes(keyword)
  //   )
  // )
  res.render("home", { restaurantsData: filterRestaurantsData })
})

app.get("/restaurants/:restaurantId", (req, res) => {
  const { restaurantId } = req.params
  const restaurantData = restaurantsData.find(
    data => data.id === Number(restaurantId)
    // 也可使用 e.id === +restaurantId
  )
  res.render("show", { restaurantData })
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
