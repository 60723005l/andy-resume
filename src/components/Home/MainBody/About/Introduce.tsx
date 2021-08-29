import React from "react";
import { Typography } from "@material-ui/core";
import ThemeBox from "../../../BacisElement/ThemeBox";

const TEXTS = [
    `我是陳彥儒，一個具有強烈好奇心且持續學習新技術的GIS工程師。`,
    `研究所畢業於國立台灣師範大學地理系，一直以來都對空間資訊技術著迷，從GIS軟體操作、空間資料探勘、撰寫arcpy分析腳本、再到GIS網頁平台開發、後端空間分析api。`,
    `就學期間，前後在 杰悉科技 與 資拓宏宇 兩家公司Intern，分別作為RD和SA協助公司產品與專案的進行。這樣的安排，是希望自己不能只單單了解軟體開發面向，為了專案有效執行，更多需要具備的能力是溝通與協調。`,
    `Intern的這兩年中，我在杰悉科技開發了數十項Demo與Prototype，研究GIS與前後端技術的應用整合。在資拓宏宇，做了許多的案例整理、系統規劃、資料分析、與工程師協調並討論專案需求、也曾到甲方進行技術說明簡報。兩家公司的經驗對於我的工作能力來說是相輔相成。`,
    `畢業後，我選擇專注在GIS網頁前端程式開發上，除了空間資訊技術之外，我投入更多的時間在熟悉Vue, React等網頁框架，以及敏捷開發搭配git flow的開發流程。對於GIS以及前端開發，我具有十分的專業與十足的熱情，擅長GIS前後端開發應用，並且具備完善的溝通能力。期盼進入貴公司將知識與經驗有所發揮，創造價值!`
]


const Introduce = () => 
{
    return (
        <ThemeBox title="介紹">
            {
                TEXTS.map( ( text, index ) =>(
                    <Typography variant="subtitle1" paragraph={true} key={index}>{text}</Typography>
                ))
            }
        </ThemeBox>
            
    )
}

export default Introduce
