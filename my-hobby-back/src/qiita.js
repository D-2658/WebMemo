const fetch = require("node-fetch");

module.exports = class Qiita
{
    // ツイートの検索　最近
    async items() {
         await new Promise(() => {
            fetch('https://qiita.com/api/v2/items.json')
            .then(response => {
                if(response.ok){
                    console.log("レスポンスOK");
                    console.log("res:"+response);
                    return response;
                }
                else{
                    console.log("レスポンスNG");
                    console.log(response)
                    return Promise.reject(new Error("search()でエラー発生!!"))
                }
            })
        });
    }
}
