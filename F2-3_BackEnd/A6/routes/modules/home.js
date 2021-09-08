const express = require("express")
const router = express.Router()
const Restaurant = require("../../models/Restaurant")

router.get("/", (req, res) => {
  Restaurant.find({})
    .lean()
    .then(restaurantsData => res.render("home", { restaurantsData }))
    .catch(err => console.log(err))
})

router.get("/search", (req, res) => {
  if (!req.query.keyword) {
    res.redirect("/")
  }

  const keyword = req.query.keyword.trim()

  Restaurant.find({})
    .lean()
    .then(restaurantsData => {
      const filterRestaurantsData = restaurantsData.filter(
        data =>
          data.name.toLowerCase().includes(keyword.toLowerCase()) ||
          data.category.includes(keyword)
      )
      res.render("home", {
        restaurantsData: filterRestaurantsData,
        keyword,
      })
    })
    .catch(err => console.log(err))
})

module.exports = router
