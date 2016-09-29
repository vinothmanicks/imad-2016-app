var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: "Article One | Vinoth",
        heading: "Article One",
        date: "Sep 28, 2016",
        content:`
                <p>
                    This is the content of article one.
                </p>
                <p>
                    This is the content of article one.
                </p>
                <p>
                    This is the content of article one.
                </p>`
    },
    'article-two': {
        title: "Article One | Vinoth",
        heading: "Article One",
        date: "Sep 28, 2016",
        content:`
                <p>
                    This is the content of article two. This is the content of article two.
                </p>
                <p>
                    This is the content of article two. This is the content of article two.
                </p>
                <p>
                    This is the content of article two. This is the content of article two.
                </p>`
    },
    'article-three': {
        title: "Article One | Vinoth",
        heading: "Article One",
        date: "Sep 28, 2016",
        content:`
                <p>
                    This is the content of article three. This is the content of article three. This is the content of article three.
                </p>
                <p>
                    This is the content of article three. This is the content of article three. This is the content of article three.
                </p>
                <p>
                    This is the content of article three. This is the content of article three. This is the content of article three.
                </p>`
    }
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
            <head>
                <title>
                    $title
                </title>
                <meta name="viewport" content="width=device-wwidth , initial-scaled=1" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href = "/"> Home </a>
                    </div>
                    <hr/>
                    <h3>
                        $heading
                    </h3>
                    <div>
                        $date
                    </div>
                    <div>
                        $content
                    </div>
                </div>
            </body>
        </html>
    `    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
