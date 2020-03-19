const fs = require('fs');
const fetch = require('node-fetch');

let url = "https://spreadsheets.google.com/feeds/cells/1nzXUdaIWC84QipdVGUKTiCSc5xntBbpMpzLm6Si33zk/ovd0hzm/public/values?alt=json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
	y = JSON.stringify(json);
	console.log(y);
	fs.writeFileSync('data.json', y);
	console.log("Written!");
    });
