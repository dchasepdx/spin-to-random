const fs = require('fs');
const request = require('superagent');

request
  .get('https://api.opendota.com/api/heroes')
  .then(res => res.body)
  .then(body => {
    body = JSON.stringify(body);
    fs.writeFile('dotaHeros.json', body);

  });