require('dotenv').config()

const axios = require("axios");
const fs = require("fs");

(async () => {
    let config = {
        headers: {
            [process.env.MEILI_API_HEADER_KEY]: process.env.MEILI_API_KEY
        },
    };

    let response = await axios.post(process.env.SEARCH_URL, {
        attributesToHighlight: ["*"],
        limit: 5000,
        q: ""
    }, config);

    const clubs = response.data.hits;

    if (clubs) {
        fs.writeFile('clubs.json', JSON.stringify(clubs), 'utf8', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('File has been written successfully');
            }
        });
    } else {
        console.log('Cannot find clubs')
    }
})();