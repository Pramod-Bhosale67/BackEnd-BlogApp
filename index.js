const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

const blog = require('./Routers/routes')

// mounting on the route
app.use("/api/v1", blog);

app.listen(PORT, () => {
    console.log(`Server is active on the PORT ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req,res) => {
    res.send(`<h1>This is the home page</h1>`)
});