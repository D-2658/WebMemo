const express = require("express");
const MyTwitter = require("./src/twitter.js");
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

// Getリクエスト
app.get("/get", async (req, res, next) => {
    console.log('app.get');

    try{
        // 検索ワードは「シャニマス」
        var abc = await client.search("\u30b7\u30e3\u30cb\u30de\u30b9");
        res.json(abc);
    }
    catch(error){
        next(error);
    }
});

// 検索 (例:ttp://localhost:5001/search?keyword=シャニマス)
app.get("/search", (req, res) => {
    console.log('app.get');
    var result = client.search(req.query.keyword)
    // result = PrepareJson.GetTweetsWithImage(result)

    res.send(async () => await result);
});

// Postリクエスト テスト用コマンド "curl -X POST [url]"
app.post("/post", function(req, res){
    console.log('app.post');
    res.send("POST is send.");
});

// サーバ起動
const port = 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));