/*
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: process.env.REACT_APP_API_KEY,
  consumer_secret: process.env.REACT_APP_API_SECRET_KEY,
  access_token_key: process.env.REACT_APP_API_ACCESS_TOKEN,
  access_token_secret: process.env.REACT_APP_API_ACCESS_TOKEN_SECRET
});

var params = {status: '日本語ツイート検証'};
client.post('statuses/update', params, function(error, tweets, response){
	if(error){
		console.log(error);
	}
});
*/

const express = require("express");
const app = express();

// CORS
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// jsonを利用可能に
app.use(express.json());

//テストゾーン/////////////////////////////////////
// use アプリケーションがリクエストを受けるたびに実行
// テスト用
app.use(function (req, res, next) {
    console.log('app.use\r\nRequest Type:', req.method)
    next()
});

// DBの代わり
const user = {id: 1, name:"Taro"};

// Getリクエスト
app.get("/get", (req, res) => {
    console.log('app.get');
});

// Postリクエスト テスト用コマンド "curl -X POST [url]"
app.post("/post", function(req, res){
    console.log('app.post');
    res.send("POST is send.");
});
///////////////////////////////////////

// サーバ起動
const port = process.env.port || 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
