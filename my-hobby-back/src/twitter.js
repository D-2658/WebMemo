const fetch = require("node-fetch");
const querystring = require('querystring');

module.exports = class Twitter
{
    #apiKey;
    #apiSecretKey;
    #accsessToken;
    #accessTokenSecret;
    #bearerToken;

    constructor(apiKey, apiSecretKey, accsessToken, accessTokenSecret, bearerToken){
        this.#apiKey = apiKey;
        this.#apiSecretKey = apiSecretKey;
        this.#accsessToken = accsessToken;
        this.#accessTokenSecret = accessTokenSecret
        this.#bearerToken = bearerToken;
    }

    // データフィールドとメディアフィールドの順番は同じ
    // ユーザフィールドは一意で返されるのでデータフィールドの数と一致しない。　dataのauthorIdとuserのidで紐づける必要がある
    // ツイートの検索　最近
    async search(keyword) {
        const querys = {
            query : keyword + " has:images -is:retweet",    // 画像を含みリツイートでないもの
            expansions : "attachments.media_keys,author_id,entities.mentions.username,in_reply_to_user_id,referenced_tweets.id.author_id",          // ツイートの添付ファイル等を取得するための設定
            "media.fields" : "url",             // メディア（画像）のurlの取得
            "user.fields" : "profile_image_url,url,username"};                        
        const qs = new URLSearchParams(querys);
        const url = "https://api.twitter.com/2/tweets/search/recent";
        const params = {method : "GET", headers : {authorization: "Bearer " + this.#bearerToken}};

        console.log("keyword:" + keyword);
        console.log("querys:" + qs);
        console.log("url:" + `${url}?` + qs);

        var txt = "初期値";
        await fetch(`${url}?` + qs, params)
            .then(response => response.json())
            .then(json => {
                console.log("代入");
                txt = json;
            });
        
        console.log("テスト");
        console.log(txt);
        return txt;
    }
}