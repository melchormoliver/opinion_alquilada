import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { closeOutline, saveOutline } from 'ionicons/icons';
import React from 'react';

const RoomPage: React.FC = () => {
  console.log('pASE ROOM PAGE');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/tabs/feed' />
            <IonTitle> Nueva Opinion </IonTitle>
          </IonButtons>

          <IonButtons slot='end'>
            <IonIcon
              size='small'
              className='ion-margin ion-justify-content-center'
              icon={saveOutline}
              onClick={() => {}}
            />
            <IonIcon
              size='small'
              className='ion-margin ion-justify-content-center'
              icon={closeOutline}
              onClick={() => {}}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div> ROOM PAGE</div>
      </IonContent>
    </IonPage>
  );
};

export default RoomPage;
