const express = require("express")
const exphbs = require("express-handlebars")
require("./config/mongoose")

const URL = require("./models/URL")
const shortenURL = require("./utils/shortenURL")

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  const shortURL = req.url.replace("/", "")
  URL.findOne({ shortURL })
    .then(data => res.redirect(data.originalURL))
    .catch(err => next())
})

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("home")
})

app.post("/", (req, res) => {
  const shortURL = shortenURL()
  URL.create({
    shortURL,
    originalURL: req.body.url,
  }).then(data => res.render("home", { origin: req.headers.origin, shortURL }))
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
