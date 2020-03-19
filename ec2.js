const fs = require('fs');
const fetch = require('node-fetch');
sheet_id="ovd0hzm";
let url = "https://spreadsheets.google.com/feeds/cells/1nzXUdaIWC84QipdVGUKTiCSc5xntBbpMpzLm6Si33zk/"+sheet_id+"/public/values?alt=json";

let settings = { method: "Get" };


let flag = 1;
fs.readFile('data.json', (err, data) => {
  if (err) {
    flag = 0
    return
  }
  console.log(data);
});
fs.readFileSyn
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON

	console.log(json.feed.updated.$t);

  if (flag == 1) {
    let rawdata = fs.readFileSync('data.json') ; // rewriting invalid data
    old = JSON.parse(rawdata);	// old json
    console.log(old.feed.updated.$t);
    json.feed.updated.$t = old.feed.updated.$t;
    for(i=0;i<json.feed.entry.length;i++){
      json.feed.entry[i].updated.$t = old.feed.updated.$t;
    }
    console.log(old.feed.entry.length);
    console.log(json.feed.updated.$t);
  }

	latest =JSON.stringify(json);
	fs.writeFileSync('data.json', latest);
	console.log("Written!");
    });
