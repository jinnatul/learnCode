let request = require('request'); // require this module

setInterval(function(){
  request({
      url: "https://jinnatul.github.io/Kid-Projects/covidBD/bdcovid.json", // example URL
      method: "GET"
  },function(error, response, body){
      if(!error && response.statusCode == 200){
        console.log(response.body);
        console.log('sucess!');
      }else{
          console.log('error' + response.statusCode);
      }
  });
}, 10000); // periodic time
