import React, {useEffect, useState} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import SearchAppBar from './Component/SearchBar';
import {ImageList, ImageListItem, List} from '@material-ui/core';
import { TweetContent } from './Class/TweetContent';
import TweetImageList from './TweetImageList'

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
    gridList: {
      width: "100%",
      height: "auto",
    },
  }),
);

function App(){
  const [temp, settemp] = useState("Hello ,World");
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <ImageList className={classes.gridList}>
        <ImageListItem cols={2} style={{ height: 'auto' }}>
          <SearchAppBar/>
        </ImageListItem>
        <TweetImageList/>
      </ImageList>
    </div>
  );
}

export default App;