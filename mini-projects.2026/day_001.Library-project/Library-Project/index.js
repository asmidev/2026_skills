const express = require("express")
const path = require("path")

const app = express()

// Static files
app.use(express.static(path.join(__dirname, "public")))

// Routes
const mainRoutes = require("./routes/main")
app.use(mainRoutes)

const PORT = 5050
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
