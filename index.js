const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { Sequelize } = require('sequelize');
const db = require("./models");

const app = express();

//default Middleware
app.use(express.json({ extended: true })); // for postman //Used to parse JSON bodies
app.use(cors()); //Middleware for connect server and react (used for server connection with unknown url)
app.use(express.urlencoded({ extended: true })); //for send the data via form //Parse URL-encoded bodies
//app.use(cookieParser());

const port = process.env.PORT || 4040;


//Databae Connection
// const sequelize = new Sequelize('sequalize-migration-practice', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// sequelize.authenticate()
//     .then(console.log('Connection has been established successfully.'))
//     .catch((error) => {
//         console.error('Unable to connect to the database:', error);
//     })

//db.sequelize.sync({ force: true });  ////logging: false
//db.sequelize.sync({ logging: true });
//db.Address.sync({ force: true });
//db.Role.sync({ force: true });
//db.User.sync({ force: true });
//db.UserRole.sync({ force: true });


//Routing
app.use('/api', require("./routes"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})