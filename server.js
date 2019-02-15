var express = require("express");
app = express();
var path = require('path');
var request = require("request");
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'kisafintech'
});
connection.connect(); 
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
   
app.post('/user', function(req, res){

});

app.get('/ejsTest', function(req, res){
    res.render('index')
})

app.get('/user', function(req, res){
    res.send('이름<input type="text" name="username"></input><br>'
    +'<button>Submut</button>'
    );
});


app.get('/', function (req, res) {
    // res.send('Hello World');
    connection.query('SELECT * from user', function (error, results, fields) {
        if (error) throw error;
      //   console.log('The solution is: ', results[0].name);
        // console.log('The solution is: ', results);
        res.send(results);
      });
});
app.get('/request', function(req, res) {
    request('http://www.naver.com', function (error, response, body) {
        res.send(body);
    });
});

app.get('/bus', function(req, res) {
    request('http://openapi.tago.go.kr/openapi/service/', function (error, response, body) {
        res.send(body);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});