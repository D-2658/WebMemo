const fetch = require("node-fetch");

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
    async search() {
         await new Promise(() => {
            fetch('https://api.twitter.com/2/tweets/search/recent?query="%E3%82%B7%E3%83%A3%E3%83%8B%E3%83%9E%E3%82%B9"',{
                method: "GET", 
                headers:{   
                    authorization: "Bearer " + this.#bearerToken,
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return json;
            })
        });
    }
}