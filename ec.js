storeTickerchart();
function storeTickerchart(){
    console.log('Running!');
    var request = require("request");

    var url = "https://cex.io/api/ticker/GHS/BTC";

    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            //console.log(body); //Print the json response
            Tickerchart.create(body, function tickerchartCreated (error, tickerchart) {
                if(error) console.log("Oops Error");
            });
        }
    });



} 

module.exports.ticker = function(){

    setInterval(storeTickerchart, 5000);

};

