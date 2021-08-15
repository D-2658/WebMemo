const express = require("express");
const MyTwitter = require("./src/twitter.js")
require('dotenv').config()
const client = new MyTwitter(
    process.env.REACT_APP_API_KEY,
    process.env.REACT_APP_API_SECRET_KEY,
    process.env.REACT_APP_API_ACCESS_TOKEN,
    process.env.REACT_APP_API_ACCESS_TOKEN_SECRET,
    process.env.REACT_APP_BEARER_TOKEN,
);
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
    res.json(client.search());
});

// Postリクエスト テスト用コマンド "curl -X POST [url]"
app.post("/post", function(req, res){
    console.log('app.post');
    res.send("POST is send.");
});

// サーバ起動
const port = 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
