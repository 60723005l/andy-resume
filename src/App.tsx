import React, { FC } from 'react';
import { HashRouter, Switch } from 'react-router-dom'
import RouteWithSubRoutes from './routes/RouteWithSubRoutes';
import routes from './routes';

const App: FC = () => {
  return (
    <HashRouter>
      <Switch>
        {
          routes.map( ( route, i ) =>
            (
              <RouteWithSubRoutes key={i} {...route}/>
            ))
        }
      </Switch>
    </HashRouter>

  );
}

export default App;
