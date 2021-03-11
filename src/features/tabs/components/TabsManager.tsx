import React from 'react';
import {
  IonLabel,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router';
import { addCircleOutline, homeOutline, personOutline } from 'ionicons/icons';

import FeedPage from '../../feed/pages/FeedPage';
import ProfilePage from '../../profile/pages/ProfilePage';
import routeFeed from '../../feed/router/routes';
import routeProfile from '../../profile/router/routes';
import routeOpinion from '../../opinion/router/routes';
import routeTabs from '../../tabs/router/routes';

const TabsManager: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IonTabs>
      <IonRouterOutlet basePath={routeTabs}>
        <Switch>
          <Route path={routeFeed} exact component={FeedPage} />
          <Route path={routeProfile} exact component={ProfilePage} />
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot='bottom'>
        <IonTabButton tab='feed' href={routeFeed}>
          <IonIcon icon={homeOutline} />
          <IonLabel>{t('tabs.first.tab.title')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab='opinion' href={routeOpinion}>
          <IonIcon icon={addCircleOutline} />
          <IonLabel>{t('tabs.second.tab.title')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab='profile' href={routeProfile}>
          <IonIcon icon={personOutline} />
          <IonLabel>{t('tabs.third.tab.title')}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabsManager;
