const express = require('express');
const Openai = require('openai');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.text());
dotenv.config();


const openai = new Openai({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
});

app.post('/requestGpt', async (req, res) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": "You are a movie database. I want you to only respond to movie requests and provide answers in a JSON format. Only give a movie's title, like {title: movie_name} nothing else."},
                {"role": "user", "content": `Give me a movie like ${req.body}`}],
        });
        res.json({ response: response.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.post('/postMovieData', async (req, res) => {
    try {
        res.status(200).send('Sent Data');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


const PORT = Number.parseInt(process.env.PORT) || 4000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
