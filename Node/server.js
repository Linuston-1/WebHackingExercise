const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
var jsonParser = bodyParser.json()
const PORT = 5001;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/lottery', jsonParser, async (req, res) => {
    try {       
        var win = parseInt(req.body.win)
        var lose = parseInt(req.body.lose)
        var totalProb = win + lose

        var responseBack = ""
        if(win + lose == 100)
        {
            if(win != 100)
            {
                responseBack = "Sorry! You lose."
            }
            else
            {
                responseBack = "Congratulations! You win a flag! JS-Flag 2"
            }
        }
        else
        {
            responseBack = "Invalid Probability " + totalProb + "%"
        }
        res.send(JSON.stringify({"lotteryOutput" : responseBack}));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/pokemon', jsonParser, async (req, res) => {
    try {       
        var pokemon = req.body.pokemon
        console.log(pokemon)
        var responseBack = ""
        if(pokemon == "Slowbro")
        {
            responseBack = "Correct! Slowbro is my favorite gen 1 pokemon. JS-Flag 3"
        }
        else
        {
            responseBack = "Incorrect! Try again."
        }
        res.send(JSON.stringify({"pokemonOutput" : responseBack}));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});