import React, { FC } from "react";
import { Header, Sidebar } from "../../components/Home";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from "../../routes/RouteWithSubRoutes";
import { RouteComponentProps } from "react-router-dom";
import { RouteItem } from "../../routes/interface";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      background: "#f5f5f5"
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
  }));


const Home = (props: RouteComponentProps<any> & RouteItem) =>
{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleToggle = (open: boolean) => {
        setOpen(open);
    };
    return(
      <div className={classes.root}>
        <CssBaseline />
            <Header open={open} toggleDrawer={handleToggle}/>
            <Sidebar open={open} onClose={() => {handleToggle(false)}}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    {
                        props.routes?.map( ( route, i ) =>
                        (
                        <RouteWithSubRoutes key={i} {...route}/>
                        ))
                    }
                </Switch>
            </main>
        </div>
    )
}

export default Home