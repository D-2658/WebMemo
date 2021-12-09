import React, {useEffect, useState} from 'react';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import { Favorite, FavoriteBorder} from '@material-ui/icons';
import {ImageListItemBar, IconButton, Dialog} from '@material-ui/core';
import TweetContentDialog from './TweetContentDialog';

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

function ImageContent({message, imageSrc, isLike}){
    const classes = useStyles();
    const [isLiked, setIsLiked] = useState(isLike)
    const [open, setOpen] = React.useState(false);
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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className={classes.Image}>
            <img src={imageSrc} width="500px" loading="lazy" alt="画像" onClick={handleClickOpen}/>
            <ImageListItemBar
              title={message}
              actionIcon={
                <IconButton color="secondary" onClick={()=>Like()}>
                    {icon()}
                </IconButton>
              }
            />
            <Dialog open={open} onClose={handleClose} maxWidth="auto">
              <TweetContentDialog imageSrc={imageSrc}/>
            </Dialog>
        </div>
    );
}

export default ImageContent;