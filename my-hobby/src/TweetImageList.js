import React, {useEffect, useState} from 'react';
import { TweetContent } from './Class/TweetContent';
import ImageContent from './Component/ImageContent';
import { ImageListItem, List} from '@material-ui/core';

export default function TweetImageList(){
  const [imageContentList, setimageContentList] = useState(null);
  
  useEffect(()=>{
    console.log(`副作用開始`);
    const callgetData = async() => {
      const tweetJson = await getData();
      const tweetContentList = await CreateList(tweetJson);

      setimageContentList(tweetContentList);
    };

    callgetData();
    console.log(`副作用終了`);
  }, [])

  console.log(`再描画`);

  return(
    // imageContentListが存在する場合のみ描画
    imageContentList != null && imageContentList.map(item=>
      <ImageListItem cols={1} style={{width: "auto", height: 'auto'}}>
        <ImageContent/>
      </ImageListItem>
    )
  );
}

async function getData(){
  console.log(`Start ${getData.name}:ツイート取得`);

  const fetchRes = await fetch('http://localhost:5001/get');
  const json = await fetchRes.json();

  console.log(`End ${getData.name}:ツイート取得`);
  return json;
}

function CreateList(json){
  var list = [];
    
  // メディア情報の収集
  json.includes.media.map((mediItem)=>{
      var item = new TweetContent();
      item.MediaKey = mediItem.media_key;
      item.ImagSrc = mediItem.url;
      list.push(item);
  });

  // ユーザ情報の結び付け
  json.data.map((basicItem)=>{
      basicItem.attachments.media_keys.map(mediakeyItem=>{
      var findRes = list.find(item => item.MediaKey == mediakeyItem);

      if (findRes != null){
          findRes.Id = basicItem.id;
          findRes.Message = basicItem.text;
      }
      });
  });

  return list;
}
