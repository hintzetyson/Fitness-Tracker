const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODY_URI || "mongodb://locatlhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, () => console.log(`App running on port ${PORT}!`))