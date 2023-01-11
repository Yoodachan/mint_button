const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('님 접속 URL', function(에러, client){
  if (에러) return console.log(에러)
  app.listen(8080, function() {
    console.log('listening on 8080')
  })
})

app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname +'/index.html');
});

app.get('/write', function(요청, 응답) { 
    응답.sendFile(__dirname +'/write.html');
});

app.post('/add', function(요청, 응답){
  console.log(요청.body);
  응답.send('전송완료');
});