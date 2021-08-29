import React, { useRef } from "react";
import { PersonalCard, Introduce, Experience } from "../../components/Home/MainBody/About";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(theme=> ({
    root: {
        background: "white"
    }
}))


const About = () => 
{
    const classes = useStyles();
    const expRef = useRef<HTMLDivElement>(document.createElement("div"))


    const handleScrollTo = (type: string) =>
    {
        expRef.current.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div className={classes.root}>
            <PersonalCard onScrollTo={handleScrollTo}></PersonalCard>
            <Introduce></Introduce>
            <div ref={expRef}><Experience></Experience></div>
            
        </div>
    )
}

export default About
