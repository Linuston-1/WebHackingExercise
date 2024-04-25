//JS-Flag 1
const display = document.getElementById("results");
const { json, response } = require("express");

async function lottery(win, lose) {
    data = {"win" : win+"", "lose" : lose+""};
    try {
        const response = await fetch('http://localhost:5001/lottery', 
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

        results.innerHTML = outData.lotteryOutput

    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}