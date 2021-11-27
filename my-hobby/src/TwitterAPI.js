import test from "../test.json"

export function Favorite(){
    // favoの呼び出し
    if(test!=null){
        console.log("Favorite成功");
        console.log(test.tweet_id);
    }
    else{
        console.log("Favorite失敗");
        console.log(test.tweet_id);
    }
}