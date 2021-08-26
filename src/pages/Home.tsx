import React, { FC } from "react";
import { Header, Sidebar } from "../components/Home";

const Home = () =>
{
    const [open, setOpen] = React.useState(false);
    const handleToggle = (open: boolean) => {
        console.log(open)
        setOpen(open);
    };
    return(
        <div>
            <Header toggleDrawer={handleToggle}/>
            <Sidebar open={open} onClose={() => {handleToggle(false)}}/>
        </div>
    )
}

export default Home