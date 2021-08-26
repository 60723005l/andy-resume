import React, { FC, useEffect } from "react";
import "./login.scss"
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import { Button, Input, InputLabel, InputAdornment, FormControl, Typography } from "@material-ui/core";
import { CesiumViewer } from "../components/CesiumViewer";
import { Viewer } from "cesium";
import EathSpin from "../components/CesiumViewer/src/camera/EathSpin";
import { withRouter, RouteComponentProps } from "react-router-dom";


// const { buildModuleUrl } = Cesium

// import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";
// console.log(buildModuleUrl)

// const useStyle = makeStyles(theme =>
//     ({
//         inputLabel:{
//             color: theme.palette.primary.contrastText,
//         },
//         icon: {
//             color: theme.palette.primary.light
//         }
//     }))

// const initialState = {
//     username: 'admin',
//     password: 'admin'
// }
// interface Props extends RouteComponentProps<any> {
//     /* Parent component's props*/
//  }
const Login = (props: RouteComponentProps<any>) =>
{
    let Spinning: EathSpin
    const handleViewerMount = (viewer: Viewer) =>
    {
        // viewer.scene.skyBox.show = false
        viewer.scene.skyBox.sources = {
            positiveX : './Assets/Textures/SkyBox_v2/px.png',
            negativeX : './Assets/Textures/SkyBox_v2/nx.png',
            positiveY : './Assets/Textures/SkyBox_v2/py.png',
            negativeY : './Assets/Textures/SkyBox_v2/ny.png',
            positiveZ : './Assets/Textures/SkyBox_v2/pz.png',
            negativeZ : './Assets/Textures/SkyBox_v2/nz.png'
          }
        viewer.scene.globe.enableLighting = true
        viewer.clock.shouldAnimate = true
        viewer.clock.multiplier = 1500;
        Spinning = new EathSpin(viewer)
        Spinning.start()
    }
    const handleLogin = () =>
    {
        Spinning.stop()
        console.log(props)
        props.history.push("./Home")
    }
    return (
        <div className="login-container">
            <CesiumViewer onViewerMounted={handleViewerMount} />
            <div className="login-form">
                <div className="item">
                    <Typography variant="h4" align="center"  >DEMO</Typography>
                </div>
                <div className="item">
                    <FormControl>
                        <InputLabel  htmlFor="input-for-username">username</InputLabel>
                        <Input
                            id="input-for-username"
                            startAdornment={
                                <InputAdornment position="start"><AccountCircle/></InputAdornment>
                            }
                            defaultValue="admin"
                        />
                    </FormControl> 
                </div>
                <div className="item">
                    <FormControl>
                        <InputLabel  htmlFor="input-for-password">password</InputLabel>
                        <Input
                            id="input-for-password"
                            startAdornment={
                                <InputAdornment position="start"><VpnKey/></InputAdornment>
                            }
                            defaultValue="admin"
                        />
                    </FormControl>
                </div>
                <div  className="item action">
                    <Button variant="contained" color="primary" onClick={handleLogin}>login</Button>
                </div>
                
                
            </div>
        </div>
        
    )
}

export default Login