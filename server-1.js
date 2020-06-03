// jshint esversion: 6

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(port, () => {
  console.log(`Express web app available at localhost:${port}`);
});


// [
//     {
//         "id": 15,
//         "type": "programming",
//         "setup": "What's the best thing about a Boolean?",
//         "punchline": "Even if you're wrong, you're only off by a bit."
//     }
// ];
