import React, {useEffect, useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import like_on from "../../Image/like_on.png"
import like_off from "../../Image/like_off.png"
import "../Style/ImageComponent.css";

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

function GoodIcon({imageSrc, isLike}){
    const [like, setLike] = useState(isLike);
    const classes = useStyles();
    const clickLike = ()=>{
        console.log("クリック!")
        if (like==true){
            setLike(false);
        }
        else{
            setLike(true);
        }
    }

    let source = like_on;
    if(like == true){
        source=like_on;
    }
    else{
        source=like_off;
    }

    return(
        <div className={classes.Image}>
            <img src={source} className={classes.Like} onClick={clickLike}/>
        </div>
    );
}

export default GoodIcon;