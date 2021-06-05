const express = require("express");
const env = require("dotenv");
const cors = require('cors');

const sequelize = require("./config/db");
const Video = require("./models/Video");
const Quiz = require("./models/Quiz");
const Task = require("./models/Task");
const Interview = require("./models/Interview");
const FurtherReading = require("./models/FurtherReading");

const app = express();

// App Config
env.config();
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Videos (id, YouTube url)
// Quiz (id, question, option1, option2, option3, option4)
// Task (id, task question, solution)
// Interview (id, question, answer)
// Further Reading (id, Title, Url,)

// Relation => Video => i.   Quizzes (One to Many)
//                      ii.  Task (One to One)
//                      iii. Interview (One to Many)
//                      iv.  Further Reading (One to Many)

app.get("/", (req, res, next) => {
    res.status(200).json({ message: "Everything fine!" });
});

// Routes
app.use('/api/v1/ml', require('./routers/admin/Course'));
app.use('/api/v1/ml', require('./routers/Course'));

// Error handler (middleware)
app.use((err, req, res, next) => {
    console.log('Error middleware: ', err);
    if (!err.statusCode) {
        err.statusCode = 500;
    }
    res.status(err.statusCode).json({message: err.message});
});

// Establish the relationship between models
Video.hasMany(Quiz, {onDelete: 'CASCADE'});
Video.hasOne(Task, {onDelete: 'CASCADE'});
Video.hasMany(Interview, {onDelete: 'CASCADE'});
Video.hasMany(FurtherReading, {onDelete: 'CASCADE'});

// Connect with the database and start server
const PORT = process.env.PORT || 8080;
sequelize
    // .sync({force: true})
    .sync()
    .then((result) => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Database connection failed. Error: ", err);
    });
