import { Typography, Button } from "@material-ui/core";
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import React from "react";
import ThemeBox from '../../components/BacisElement/ThemeBox'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mediaBox: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            position: "relative",
        },
      '& > img': {
          maxWidth: '450px'
      }
    }
  }),
);

interface IProjectItem {
    title: string,
    link?: string,
    contentText: any[],
    img_srcs: string[]
}

const projectList: Array<IProjectItem> = [
    {
        title: '浸水營數位走讀地圖',
        link: 'https://map.jsdc.com.tw/webgis/dguidewalks/s0002',
        img_srcs: ['/image/proj-s0002.png'],
        contentText: [
            '',
            `呈現景點與路徑的地圖資訊，景點資訊與外部CMS網頁內容連動。
            介接氣象API, 顯示路線範圍行政區的天氣資訊。`,
            `
            前端：
            使用Vue, Leaflet。
            `,
            `
            後端：
            後端使用 Node + Express + Sequelize + PostgreSQL + PostGIS。
            `
        ]
    },
    {
        title: '宗教與民俗文化地圖',
        link: 'https://map.jsdc.com.tw/webgis/trfc',
        img_srcs: ['/image/proj-trfc.png'],
        contentText: [
            '',
            `以空間或類別欄位查詢POI，避免過多POI干擾視覺，以cluster的方式顯示`,
            `
            前端：
            使用Vue, Leaflet。
            `,
            `
            後端：
            後端使用 Node + Express + Sequelize + PostgreSQL + PostGIS。
            `
        ]
    },
    {
        title: '原住民知識地圖',
        link: 'https://map.jsdc.com.tw/webgis/ioe',
        img_srcs: ['/image/proj-ioe.png'],
        contentText: [
            '',
            `以較高彈性的查詢邏輯篩選POI，同時呈現當前查詢結果中各項類別主題的查詢數量，點擊查詢結果可與地圖互動將視角飛行至該位置`,
            `
            前端：
            使用Vue, Leaflet。
            `,
            `
            後端：
            後端使用 Node + TypeScript + Express + TypeORM + PostgreSQL + PostGIS。
            `
        ]
    },
    {
        title: '3D建築物地圖',
        link: 'https://map.jsdc.com.tw/webgis/3Dmap',
        img_srcs: ['/image/proj-3dmap.png'],
        contentText: [
            '',
            `介接內政部3DTILE格式之3D地圖，製作簡易圖層清單`,
            `
            前端：
            使用React, TypeScript, Material UI, Cesium
            `
        ]
    },
    {
        title: '估價DDS圖台',
        link: 'http://140.122.82.98/map/index.html',
        img_srcs: ['/image/proj-vpmc.png'],
        contentText: [
            '',
            `不動產估價平台，以估價模型計算不動產價格。`,
            `提供測量、圖層管理、地址地號查詢等功能。`,
            `後端配合.net進行開發，部分頁面如後台管理、scaffold資料表由.net渲染。`,
            `
            前端：
            使用Vue, Vue Material, Leaflet
            `
        ]
    },
    {
        title: '遠傳TPKC GIS平台',
        img_srcs: ['/image/proj-tpkc1.png', '/image/proj-tpkc2.png', '/image/proj-tpkc3.png'],
        contentText: [
            '',
            `GIS圖台，提供使用者建立地圖專案、上傳並管理模型與地圖資料。`,
            `具備使用者權限管理、地圖專案發佈管理、模型與地圖資料之版本控制`,
            `
            前端：
            使用Vue, Vue Material, Cesium
            `
        ]
    }
]


const Project = () => 
{
    const classes = useStyles();
    return (
        <>
        {
            projectList.map((project, index2) => (
                <ThemeBox key={index2} title={project.title}>
                    {
                    <>
                        <div className={classes.mediaBox} >
                            {
                                project.img_srcs.map((src, index3) => (
                                    <img key={index3} src={src} />
                                ))
                            }
                        </div>
                        {
                            project.link
                                ? (
                                    <Button variant='outlined' color="primary" href={project.link}>前往</Button>
                                ) : null
                        }
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
