import React, {useEffect, useState} from 'react';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import { Favorite, FavoriteBorder} from '@material-ui/icons';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import like_on from "../../Image/like_on.png"
import like_off from "../../Image/like_off.png"
import {ImageListItemBar, IconButton} from '@material-ui/core';
import * as Twitter from "../TwitterAPI.js"
import blue from "../../Image/blue.png"

const useStyles = makeStyles((theme) =>
  createStyles({
    Image: {
        width: "auto",
        height: "auto",
        position: "relative"
    },
    Like: {
        right:"0px",
        bottom:"0px",
        width:"20%",
        height:"20%",
        position: "absolute"
    },
  }),
);

function ImageContent({imageSrc, isLike}){
    const classes = useStyles();
    const [isLiked, setIsLiked] = useState(isLike)
    const icon = ()=>{
        var item;
        if(isLiked == true){
            item = <Favorite></Favorite>
        }
        else{
            item = <FavoriteBorder></FavoriteBorder>
        }

        return item;
    }

    const Like = () => {
        // Like処理の呼び出し
        if(isLiked){
            setIsLiked(false)
        }
        else{
            setIsLiked(true)
        }
        return 0;
    }

    return(
        <div className={classes.Image}>
            <img src={blue} width="200"/>
            <ImageListItemBar
              title={"temptemptemp"}
              actionIcon={
                <IconButton color="secondary" onClick={()=>Like()}>
                    {icon()}
                </IconButton>
              }
            />
        </div>
    );
}

export default ImageContent;