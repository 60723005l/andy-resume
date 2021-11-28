import React from "react";
import ThemeBox from "../../../BacisElement/ThemeBox";
import MediaThemeCard, { IMediaThemeProps } from "../../../BacisElement/MediaThemeCard"
const Informations: Array<IMediaThemeProps> = [
    {
        title: 'Express',
        subtitle: 'WebServer, API',
        content: `具備開發Express router, middleware等經驗, 並搭配其他ORM package與資料庫溝通、開發API`,
        image: "/image/logo-express.png"
    },
    {
        title: 'Sequelize',
        subtitle: 'ORM, sequelize-cli',
        content: `具備使用sequelize-cli建立專案、migrage、seeding等經驗`,
        image: "/image/logo-sequelize.png"
    },
    {
        title: 'TypeORM',
        subtitle: 'ORM, TypeScript',
        content: `使用TypeORM並以TypeScript開發更嚴謹的後端程式`,
        image: "/image/logo-typeorm.png"
    },
    {
        title: 'PostgreSQL',
        subtitle: 'Database, PostGIS',
        content: `除了將PG作為一般資料庫使用，也具備使用PostGIS extension的開發經驗，進行更有效的空間資料查詢與分析`,
        image: "/image/logo-postgresql.png"
    },
]




const Backend = () => 
{
    return (
        <ThemeBox title="後端">
            {
                Informations.map( (info, index) => (
                    <MediaThemeCard key={index} {...info} />
                ))
            }
        </ThemeBox>
            
    )
}

export { Backend as default }
