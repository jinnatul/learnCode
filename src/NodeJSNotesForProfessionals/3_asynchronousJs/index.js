let fs = require('fs');
let superagent = require('superagent');

/*
fs.readFile(`${__dirname}/test.txt`, 'utf-8', (err, data) => {
  console.log(data);
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body);

      fs.writeFile('output.txt', res.body.message, err => {
        console.log('Dog image save to a file.')
      })
    })
})
*/

// callbacks callback hell to promises
fs.readFile(`${__dirname}/test.txt`, 'utf-8', (err, data) => {
  console.log(data);
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res => {
      console.log(res.body);

      fs.writeFile('output.txt', res.body.message, err => {
        if (err) return console.log(err.message);
        console.log('Dog image save to a file.');
      });
    })
    .catch(err => {
      console.log(err.message);
    });
});