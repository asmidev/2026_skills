const express = require("express")
const router = express.Router()
const path = require("path")

router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "/views/about.html"))
})

router.get("/acount", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "/views/acount.html"))
})

router.get("/catalog", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "/views/catalog.html"))
})

router.get("/search", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "/views/search.html"))
})

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "/views/index.html"))
})

module.exports = router
