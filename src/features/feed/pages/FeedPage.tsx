import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { filterOutline } from 'ionicons/icons';

const FeedPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='end'>
            <IonIcon
              size='small'
              className='ion-margin ion-justify-content-center'
              icon={filterOutline}
            />
          </IonButtons>
          <IonSearchbar
            placeholder={t('feed.searchbar.placeholder')}
            value={searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>FEED PAGE</IonItem>
      </IonContent>
    </IonPage>
  );
};

export default FeedPage;
