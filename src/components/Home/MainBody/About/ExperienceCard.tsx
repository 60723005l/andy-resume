import React from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    mediaBox: {
        width: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down('sm')]: {
            width: 150,
            left: "50%",
            position: "relative",
            transform: "translate(-50%, 0px)"
        },
      '& > img': {
          width: "inherit"
      }
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

interface ExpCardProps {
    title: string
    subtitle: string
    content: string
    image: string
}

const ExperienceCard = ({title, subtitle, content, image}: ExpCardProps) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
        <div className={classes.mediaBox}>
            <img src={image} />
        </div>
        <div className={classes.details}>
        <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">{title}</Typography>
            <Typography variant="subtitle1"  color="textSecondary">{subtitle}</Typography>
        </CardContent>
        <div className={classes.controls}>
            <Typography variant="subtitle2">{content}</Typography>
        </div>
        </div>
    </Card>
  );
}

export { ExperienceCard as default }
export type {ExpCardProps}