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
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircleOutline, homeOutline, personOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

import HelloWorld from './pages/HelloWorld';
import FeedPage from './features/feed/pages/FeedPage';
import OpinionPage from './features/opinion/pages/OpinionPage';
import ProfilePage from './features/profile/pages/ProfilePage';

import routeOpinion from './features/opinion/router/routes';
import routeFeed from './features/feed/router/routes';
import routeProfile from './features/profile/router/routes';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path={routeFeed} exact component={FeedPage} />
            <Route path={routeProfile} exact component={ProfilePage} />
            <Route path={routeOpinion} exact component={OpinionPage} />
            <Route path='/hello' exact component={HelloWorld} />
            <Redirect to={routeFeed} />
          </IonRouterOutlet>
          <IonTabBar slot='bottom'>
            <IonTabButton tab='home' href={routeFeed}>
              <IonIcon icon={homeOutline} />
              <IonLabel>{t('app.first.tab.title')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab='opinion' href={routeOpinion}>
              <IonIcon icon={addCircleOutline} />
              <IonLabel>{t('app.second.tab.title')}</IonLabel>
            </IonTabButton>
            <IonTabButton tab='profile' href={routeProfile}>
              <IonIcon icon={personOutline} />
              <IonLabel>{t('app.third.tab.title')}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
