import { Typography, Link } from "@material-ui/core";
import React from "react";
import ThemeBox from "../../../BacisElement/ThemeBox";

interface IProjectItem {
    title: string,
    link: string,
    contentText: string[]
}

const projectList: Array<IProjectItem> = [
    {
        title: '浸水營數位走讀地圖',
        link: 'https://map.jsdc.com.tw/webgis/dguidewalks/s0002',
        contentText: ['']
    },
    {
        title: '重構大學路地圖',
        link: 'https://map.jsdc.com.tw/webgis/minsyong',
        contentText: ['']
    },
]


const Project = () => 
{
    return (
        <>
        {
            projectList.map(project => (
                <ThemeBox title={project.title}>
                    {
                    <>
                        <Typography>
                            <Link href={project.link}>前往</Link>
                        </Typography>
                        {
                            project.contentText.map( ( text, index ) =>(
                                <Typography variant="subtitle1" paragraph={true} key={index}>{text}</Typography>                            
                            ))
                        }
                    </>
                    }
                </ThemeBox>
            ))
        }
        </> 
    )
}

export { Project as default }
