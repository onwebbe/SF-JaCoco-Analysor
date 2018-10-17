var cheerio = require('cheerio');
require('ssl-root-cas').inject();
require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();
var https = require("https")


var options = {
    host: 'cd.successfactors.com',
    path: '/job/SFV4/job/au-cdp/job/master/670/artifact/jacoco.html',
    "rejectUnauthorized": false
};
https.get(options, function (http_res) {

        var data = "";
    
    
        http_res.on("data", function (chunk) {
    
            data += chunk;
        });
    
    
        http_res.on("end", function () {
            var $ = cheerio.load(data);
            console.log($('.coverage td').html());
        });
    });
