import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { closeOutline, saveOutline } from 'ionicons/icons';

const OpinionPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='end'>
            <IonIcon
              size='small'
              className='ion-margin ion-justify-content-center'
              icon={saveOutline}
            />
            <IonIcon
              size='small'
              className='ion-margin ion-justify-content-center'
              icon={closeOutline}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>OPINION PAGE</IonItem>
      </IonContent>
    </IonPage>
  );
};

export default OpinionPage;
