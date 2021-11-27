import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled("div")(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // テーマオブジェクトの色の一覧 https://mui.com/ja/customization/default-theme/?expand-path=$.palette
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));

const SearchIconWrapper = styled("div")(({theme}) =>({
    padding:theme.spacing(0,2),
    height:"100%",
    position:"absolute",
    pointerEvents:"none",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
}));

const StyledInputBase = styled(InputBase)(({theme})=>({
    color:"inherit",
    display:"flex",
    // Nesting selectors ターゲット要素にセレクターを入れ子にできる。　StyledInputBase内のMuiInputBase-inputのスタイルを指定している。
    '& .MuiInputBase-input':{
        padding:theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        trainsition: theme.transitions.create("width"),
        width:"100%",
        [theme.breakpoints.up("sm")]:{
            width:"12ch",
            "&:focus":{
                width:"20ch"
            },
        },
    },
}));

export default function SearchAppBar(){
    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr:2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display:{xs:"none", sm:"block"}}}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{"aria-base":"search"}}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    )
} 

/* function SearchBar(image, id){
    return(
        <Grid  container alignItems="center">
            <TextField id="outlined-basic" label="検索キーワード" variant="outlined"/>
            <Button variant="contained" size="large" color="primary" >
                検索
            </Button>
        </Grid>
    );
}
 */