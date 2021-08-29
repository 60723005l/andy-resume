import Loading from '../pages/Loading';
import { RouteItem } from './interface';
import Loadable from 'react-loadable';

const Login = Loadable({
    loader: () => import('../pages/Login'),
    loading: Loading
})
const Home = Loadable({
  loader: () => import('../pages/Home/Home'),
  loading: Loading
})
const About = Loadable({
  loader: () => import('../pages/Home/About'),
  loading: Loading
})
const Skill = Loadable({
  loader: () => import('../pages/Home/Skill'),
  loading: Loading
})
const Project = Loadable({
  loader: () => import('../pages/Home/Project'),
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
    {path: '/Home', component: Home, routes: [
      {path: '/Home', exact: true, component: About},
      {path: '/Home/skill', exact: true, component: Skill},
      {path: '/Home/project', exact: true, component: Project},
    ]},
    // {
    //   path: '/:user/demos', component: Demos,
    //   routes:[
    //     {path: '/:user/demos/:demotitle', component: DemoView},
    //   ]
    // },
  ]
  export default routes