import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface FeedProps {}

const FeedPage: React.FC<FeedProps> = ({}) => {
  const { t } = useTranslation();
  const pepe = t('feed title');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('feed title') ? t('feed title') : 'CULI'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>CULI</IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default FeedPage;
