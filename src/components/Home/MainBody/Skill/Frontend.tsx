import React from "react";
import ThemeBox from "../../../BacisElement/ThemeBox";
import MediaThemeCard, { IMediaThemeProps } from "../../../BacisElement/MediaThemeCard"
const Informations: Array<IMediaThemeProps> = [
    {
        title: 'Vue',
        subtitle: 'Vuex, Vue material, mixin, event bus',
        content: `熟悉元件life cycle, Vuex全域狀態管理，並且視需求使用用mixin減少程式複用，以及event bus處理相對單純的全域事件`,
        image: "/image/logo-vue.png"
    },
    {
        title: 'React',
        subtitle: 'Redux, Typescript, Material UI',
        content: `具備React搭配Typescript開發經驗，熟悉Functional component以及hooks的使用方式。 具備使用Material ui, Tailwind, scss等樣式工具經驗`,
        image: "/image/logo-react.png"
    },
    {
        title: 'Cesium.js',
        subtitle: 'WebGL library, 3D GIS',
        content: `具備 Cesium 搭配 Vue, React等框架之開發經驗， 並且熟悉大部分Library使用方式`,
        image: "/image/logo-cesium.png"
    },
    {
        title: 'Leaflet.js',
        subtitle: 'WebGL library, 2D GIS',
        content: `具備 Leaflet 搭配 Vue 前端框架之開發經驗， 並且熟悉大部分Library使用方式`,
        image: "/image/logo-leaflet.png"
    },
]




const Frontend = () => 
{
    return (
        <ThemeBox title="前端">
            {
                Informations.map( (info, index) => (
                    <MediaThemeCard key={index} {...info} />
                ))
            }
        </ThemeBox>
            
    )
}

export { Frontend as default }
