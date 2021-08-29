import React from "react";
import ThemeBox from "../../components/BacisElement/ThemeBox";
import { makeStyles } from "@material-ui/styles";


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
            <ThemeBox title="前端">
                <span>前端</span>
            </ThemeBox>
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