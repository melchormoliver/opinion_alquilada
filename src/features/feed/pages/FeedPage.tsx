import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { filterOutline } from 'ionicons/icons';

import Card from '../../../shared/components/card/Card';
import items from '../mocks/items';

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
        {items.map((elem, index) => (
          <Card
            key={index}
            imgsrc={elem.src}
            title={elem.title}
            content={elem.content}
          ></Card>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default FeedPage;
