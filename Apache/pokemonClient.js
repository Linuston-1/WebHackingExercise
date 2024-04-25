const { json, response } = require("express");

async function pokemonGuess(win, lose) {
    const input = document.getElementById("input")
    const display = document.getElementById("output");
    data = {"pokemon" : input.value}
    try {
        const response = await fetch('http://localhost:5001/pokemon', 
        {   
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(!response.ok)
            {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            outData = data
        })
        .catch(error => {
            console.error("Error: ", error)
        });
        console.log(outData.pokemonOutput)
        display.innerHTML = outData.pokemonOutput

    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}