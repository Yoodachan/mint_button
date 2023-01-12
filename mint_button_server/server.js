const express = require('express');
const app = express();


// 인풋정보 불러올 때 사용
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended : true }))


const MongoClient = require('mongodb').MongoClient;

// //자료 담을 db 미리 선언해둠 
var db;
MongoClient.connect('mongodb+srv://miniming1026:flqhdaos12@cluster0.ausvy.mongodb.net/Todoapp?retryWrites=true&w=majority',function(에러,client){

if (에러) return console.log(에러)

app.listen(8080, function() {
  console.log('listening on 8080')
})

db = client.db('todoapp');

db.collection('post').insertOne( {이름 : 'John', _id : 100} , function(에러, 결과){
    console.log('저장완료'); 
});

});

app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname +'/index.html');
});

app.get('/write', function(요청, 응답) { 
    응답.sendFile(__dirname +'/write.html');
});

app.post('/add', function(요청, 응답){
  console.log(요청.body);
  console.log(요청.body.date);
  console.log(요청.body.title);
  응답.send('전송완료');
});