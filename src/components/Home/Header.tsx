import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
  }));

  interface Props {
    open: boolean
    toggleDrawer: (bool: boolean) => void
  }
  const Header = (props: Props) =>
  {
    const classes = useStyles();
    return(
        
            <AppBar 
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
              })}>
                <Toolbar>
                <IconButton 
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => {props.toggleDrawer(true)} }
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hide]: props.open,
                  })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Andy.Chen
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
    )
  }

export default Header