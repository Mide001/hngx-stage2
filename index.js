require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const port = process.env.PORT;

const app = express();

const UserRoute = require('./routes/User');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', UserRoute);

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(`An Error Occured: ${err}`);
});

app.get('/', (req, res) => {
    res.json({ message: "Build A Simple REST API"})
});

app.listen(port, async () => {
    console.log(`Server up on port ${port}`);
});

// const uri = "mongodb+srv://ide:<password>@cluster0.hwi2gxe.mongodb.net/?retryWrites=true&w=majority";

// Xh53j9tSiZtAQDP8