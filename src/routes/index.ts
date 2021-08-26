// import { FC } from 'react'; 
import Loading from '../pages/Loading';
import { RouteItem } from './interface';
import Loadable from 'react-loadable';

const Login = Loadable({
    loader: () => import('../pages/Login'),
    loading: Loading
})
const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading
})
const LoadingPage = Loadable({
  loader: () => import('../pages/Loading'),
  loading: Loading
})


  //note: https://iter01.com/48207.html
  const routes: Array<RouteItem> = [
    {path: '/', exact: true, component: Login},
    {path: '/Loading', exact: true, component: LoadingPage},
    {path: '/Home', exact: true, component: Home},
    // {
    //   path: '/:user/demos', component: Demos,
    //   routes:[
    //     {path: '/:user/demos/:demotitle', component: DemoView},
    //   ]
    // },
  ]
  export default routes