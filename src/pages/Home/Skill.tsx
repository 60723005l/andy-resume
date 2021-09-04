import React from "react";
import ThemeBox from "../../components/BacisElement/ThemeBox";
import { makeStyles } from "@material-ui/styles";
import Frontend from "../../components/Home/MainBody/Skill/Frontend"

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
            <ThemeBox title="後端">
                <span>後端</span>
            </ThemeBox>
            <ThemeBox title="其他">
                <span>其他</span>
            </ThemeBox>
        </div>
    )
}

export default Skill