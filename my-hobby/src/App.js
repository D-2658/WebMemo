import React, {useEffect, useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import SearchAppBar from './Component/SearchBar';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { Box } from '@mui/material';
import { TweetContent } from './Class/TweetContent';
import TweetImageList from './TweetImageList'
import TweetContentDialog from './Component/TweetContentDialog';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      height: "100%"
    },
    dialog: {
      width: "100%",
      height: "100%",
    },
  }),
);

function App(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <SearchAppBar/>
      <ImageList variant="masonry" cols={4} gap={10}>
        <TweetImageList/>
      </ImageList> 
      <TweetContentDialog open={true}  className={classes.dialog}/>
    </div>
  );
}

export default App;