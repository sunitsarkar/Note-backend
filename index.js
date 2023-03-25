const express = require('express');
const cors = require("cors");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const router=require('./route/router')


const app = express();
const uri = "mongodb+srv://sunitsarkar:LwP8bgRq3VOKlHWI@cluster0.gxschpx.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery',false);
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("CONNECTED TO DATABASE");
    });

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use('/',router)


const port = 8000;


app.listen(port, () => {
    console.log(`server is live on port ${port}`)
});







