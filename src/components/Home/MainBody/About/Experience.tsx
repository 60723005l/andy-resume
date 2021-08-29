import React from "react";
import { Typography } from "@material-ui/core";
import ThemeBox from "../../../BacisElement/ThemeBox";
import ExperienceCard, { ExpCardProps } from "./ExperienceCard";

const Informations: Array<ExpCardProps> = [
    {
        title: 'GIS工程師',
        subtitle: '杰悉科技股份有限公司',
        content: `GIS 3D網頁圖台開發，包括前端與後端之開發流程。工作主要在網頁前端，使用Cesium.js + Vue.js 框架，開發過程涉及Vue元件設計、Cesium library使用、少許電腦圖學應用、3D Model前處理、空間資料處理、以及架設GIS的後端服務。`,
        image: "/image/NADI-logo.gif"
    },
    {
        title: '系統分析師',
        subtitle: '資拓宏宇國際股份有限公司',
        content: `以GIS相關專案為主，事前進行系統建置的資料調查、分析，初步實作GIS領域的分析、視覺化、操作流程等，在專案中執行的可行性與建議，並且於專案執行過程中充分與工程師協調、討論。另外也持續性的測試專案功能是否完善，並撰寫月報，給予系統建議或是通知工程師進行維護。並藉由專案所蒐集之數據，進行資料探勘，分析使用者習慣。`,
        image: "/image/IISI-logo.gif"
    },
]




const Experience = () => 
{
    return (
        <ThemeBox title="工作經歷">
            {
                Informations.map( (info, index) => (
                    <ExperienceCard key={index} {...info} />
                ))
            }
        </ThemeBox>
            
    )
}

export { Experience as default }
