import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography, Badge, Button, Popover, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: "column",
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    photo: {
        position: "absolute",
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        top: "50%",
        transform: "translate(0px, -50%)",
    },
    person: {
      display: "flex",
      height: theme.spacing(12),
      flexDirection: "column",
      margin: theme.spacing(2)
    },
    info: {
      display: "flex",
      flexDirection: "column",
      height: theme.spacing(12),
      '& .block': {
        height: theme.spacing(12)/2,
      },
      '& .name': {
        fontWeight: 800,
        color: "white",
      },
      '& .subinfo': {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        '& span': {
          marginInlineEnd: theme.spacing(2)
        }
      }
    },
    photobox: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        height: "300px",
        alignItems: 'center',
        backgroundImage: 'url(/image/photo-bg.gif)',
        backgroundSize: 'cover',
        backgroundPositionY: 'center'
    },
    bg1: {
      flex:0.5, 
      // background: 'blue', 
      width: "100%",
    },
    bg2: {
      flex:0.5, 
      display: 'flex',
      background: '#ffffffc7', 
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down('sm')]: {
        justifyContent: "flex-end",
        paddingBottom: theme.spacing(1)
      }
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12)
    },
    exp: {
        display: "flex",
        width: '100%',
        margin: '0px'
    },
    paper: {
        flex: 0.5,
        display: 'flex',
        justifyContent: "center",
      },
    popover: {
      pointerEvents: 'none',
    },
    ppp: {
      padding: theme.spacing(1),
    },
  }),
);

type Props = {
  onScrollTo: (type: string) => void
}

const PersonalCard = ({onScrollTo}: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const targetUrl = `${window.location.origin}/#/Home/Project`

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
        
        <div className={classes.photobox}>
          <div className={classes.bg1}></div>
          <div className={classes.bg2}>
            <div className={classes.exp}>
              <div className={classes.paper}>
                <Badge badgeContent={3} color="primary">
                  <Button variant="contained" color="primary" onClick={() => onScrollTo('exp') }>工作經驗</Button>
                </Badge>
              </div>
              <div className={classes.paper}>
                <Badge badgeContent={6} color="primary">
                <Button variant="contained" color="primary" onClick={() => onScrollTo('exp') } onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>參與專案</Button>
                  <Popover id="mouse-over-popover" open={open} className={classes.popover}
                  
                    anchorEl={anchorEl} onClose={handlePopoverClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    disableRestoreFocus
                  >
                    <iframe src={targetUrl}></iframe>
                  </Popover>
                  
                </Badge>
              </div>
            </div>
          </div>
          <div className={classes.photo}>
            <div className={classes.person}>
              <Avatar alt="Remy Sharp" src="/image/my-photo.jpg" variant="circular" className={classes.large} />
            </div>
            <div className={classes.info}>
              <div className="block" style={{display: "flex", alignItems: "flex-end"}}>
                <Typography className="name" variant="h6">陳彥儒</Typography>
              </div>
              <div className="block">
                <div className="subinfo">
                  <Typography variant="subtitle1" component="span">國立臺灣師範大學</Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography variant="subtitle1" component="span">地理學系</Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography variant="subtitle1" component="span">碩士畢業</Typography>
                </div>
              </div>
              
              
              

            </div>
            
          </div>
          
            
        </div>
        
    </div>
  );
}

export default PersonalCard