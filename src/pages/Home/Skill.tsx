import React from "react";
import ThemeBox from "../../components/BacisElement/ThemeBox";
import { makeStyles } from "@material-ui/styles";
import Frontend from "../../components/Home/MainBody/Skill/Frontend"
import Backend from "../../components/Home/MainBody/Skill/Backend"

const useStyles = makeStyles(theme=> ({
    root: {
        background: "white"
    }
}))
const Skill = () => 
{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Frontend />
            <Backend />
            <ThemeBox title="其他">
                <span>其他</span>
            </ThemeBox>
        </div>
    )
}

export default Skill