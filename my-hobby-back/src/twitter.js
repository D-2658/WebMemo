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

    // ツイートの検索　最近
    async search(keyword) {
         await new Promise(() => {
            const querys = {query : keyword, expansions : "attachments.media_keys", "media.fields" : "url"};
            const qs = new URLSearchParams(querys);
            const url = "https://api.twitter.com/2/tweets/search/recent";
            const params = {method : "GET", headers : {authorization: "Bearer " + this.#bearerToken}};

            console.log("keyword" + keyword);
            console.log("querys" + qs);
            console.log("url" + `${url}?` + qs);

            fetch(`${url}?` + qs, params)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                console.log(json.includes.media[0]);
                return json;
            });
        });
    }
}