var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article one | Swamy',
    heading: 'Article one',
    date: 'Aug 5 2017',
    content: `
         <p>
             Hi i am paragraph one Hi i am paragraph one Hi i am paragraph one Hi i am paragraph one Hi i am paragraph one
             Hi i am paragraph one Hi i am paragraph one Hi i am paragraph one Hi i am paragraph one Hi i am paragraph one
             Hi i am paragraph one Hi i am paragraph one
         </p>
         <p>
             Hi i am paragraph two Hi i am paragraph two Hi i am paragraph two Hi i am paragraph two Hi i am paragraph two 
             Hi i am paragraph two Hi i am paragraph two Hi i am paragraph two Hi i am paragraph two Hi i am paragraph two
             Hi i am paragraph two Hi i am paragraph two Hi i am paragraph two
         </p>
         <p>
             Hi i am paragraph three Hi i am paragraph three Hi i am paragraph three Hi i am paragraph three 
             Hi i am paragraph three Hi i am paragraph three Hi i am paragraph three Hi i am paragraph three
             Hi i am paragraph three Hi i am paragraph three
         </p>
    `
};
function createTemplate(data){
    var date=data.date;
    var title=data.title;
    var content=data.content;
    var heading=data.heading;
var htmlTemplate = `
<html>
  <head>
   <title> ${title}</title>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link href="/ui/style.css" rel="stylesheet" />
  </head>
  
  <body>
     <div class="container">
      <div>
        <a href= "/">Home</a>
      </div>
      <hr/>
      <h3>${heading}</h3>
      <div>
       ${date}
      </div>
      <div>
        ${content}
      </div>
      </div>
  
  </body>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/article-two', function (req, res) {
  res.send("hi this article-two");
});

app.get('/article-three', function (req, res) {
  res.send("hi this article-three");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
