const express = require('express');
const Openai = require('openai');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const corsOptions = {
    origin: "*"
}

app.options('*', cors());
app.options('/requestGpt', cors());
app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
dotenv.config();


const openai = new Openai({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
});

app.post('/requestGpt', cors(corsOptions), async (req, res) => {
    console.log("here");
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "You are a movie database. I want you to only respond to movie requests."},
                {"role": "user", "content": `Give me 3 movies similar to ${req.body}. I just want the movie titles not year or dates.`},
            ],
        });
        res.status(200).json(response.choices[0].message.content);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


const PORT = Number.parseInt(process.env.PORT) || 4000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
