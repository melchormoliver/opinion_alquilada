import React from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import OpinionPage from './features/opinion/pages/Opinion/OpinionPage';
import routeOpinion from './features/opinion/router/routes';
import NotFoundPage from './features/404/pages/NotFoundPage';
import notFoundRoutes from './features/404/router/routes';
import TabsManager from './features/tabs/components/TabsManager';
import routeTabs from './features/tabs/router/routes';
import routeFeed from './features/feed/router/routes';
import RoomPage from './features/opinion/pages/Room/RoomPage';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <Route path={notFoundRoutes} exact component={NotFoundPage} />
            <Route path={routeOpinion} exact component={OpinionPage} />
            <Route path={'/opinion/room/:idRoom'} exact component={RoomPage} />
            <Route path={routeTabs} component={TabsManager} />
            <Redirect to={routeFeed} />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
