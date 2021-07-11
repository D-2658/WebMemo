const MyTwitter = require("./src/twitter.js")
require('dotenv').config()
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: process.env.REACT_APP_API_KEY,
  consumer_secret: process.env.REACT_APP_API_SECRET_KEY,
  access_token_key: process.env.REACT_APP_API_ACCESS_TOKEN,
  access_token_secret: process.env.REACT_APP_API_ACCESS_TOKEN_SECRET,
});

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

    let mytwitter = new MyTwitter(
        process.env.REACT_APP_API_KEY,
        process.env.REACT_APP_API_SECRET_KEY,
        process.env.REACT_APP_API_ACCESS_TOKEN,
        process.env.REACT_APP_API_ACCESS_TOKEN_SECRET,
        process.env.REACT_APP_BEARER_TOKEN);
    
    mytwitter.search();
    // var params = {status: '日本語ツイート検証'};
    // client.get('search/tweets.json?q="%E3%82%B7%E3%83%A3%E3%83%8B%E3%83', params, function(error, tweets, response){
    //     if(error){
    //         console.log(error);
    //     }
    //     else{
    //         console.log(tweets);
    //         res = tweets;
    //     }
    // });
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
