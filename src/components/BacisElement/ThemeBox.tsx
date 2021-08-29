import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Divider } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme)=> ({
    group: {
        margin: theme.spacing(1),
        border: "1px solid #e6e6e6",
        borderRadius: 5
    },
    title: {
        margin: theme.spacing(2),
        fontWeight: "bold"
    },
    description: {
        margin: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: theme.spacing(1),
        }
    }
}))

interface Props {
    children: JSX.Element | Array<JSX.Element>,
    title: string,
}

const ThemeBox = ({children, title}: Props) => 
{
    const classes = useStyles();
    return (
        <div className={classes.group}>
            <Typography color="primary" className={classes.title} variant="h6">{title}</Typography>
            <Divider/>
            <div className={classes.description}>
                {children}  
            </div>
                      
        </div>
            
    )
}

export default ThemeBox
