const express = require('express');
const app = express();

const db = require("./sequelize/models")

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
})