import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { ArrowLeft } from '@material-ui/icons';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import { display } from '@mui/system';

const useStyles = makeStyles((theme) =>
    createStyles({
      main: {
        flexDirection:"column",
        flexWrap:"nowrap",
      },
      message: {
        display:"inline",
      }
    }),
  );

function TweetContentDialog({userName, userIconSrc, imageSrc, msg, isLiske}){
  const classes = useStyles();
  
  return(
    <div className={classes.main}>
      <img src={imageSrc} loading="lazy" alt="画像"/>
      <div>
        <img src = {userIconSrc} alt="アイコン画像"/>
        <div  className={classes.message}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
    </div>
  );
}

export default TweetContentDialog;