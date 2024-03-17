const express = require('express');
const app = express();

const db = require("./sequelize/models")

db.sequelize.authenticate().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("Error: " + err);
}).then(() => {
    db.sequelize.sync(true); // this will drop tables and recreate them
})

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
})