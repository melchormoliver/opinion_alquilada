import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import feedRoutes from '../../../features/feed/router/routes';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('notfound.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className='ion-center'>
          <IonRow>
            <IonLabel>{t('notfound.content')}</IonLabel>
          </IonRow>
          <IonRow>
            <IonButton id='go-feed' onClick={() => history.push(feedRoutes)}>
              {t('notfound.redirect')}
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;
