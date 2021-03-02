import {
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonToolbar,
    IonBackButton,
    IonHeader,
    IonButtons,
    IonButton
  } from '@ionic/react';
import React from 'react';
import {add} from 'ionicons/icons';

  const DetailPage: React.FC = () => {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
               <IonBackButton defaultHref="/"/>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
        <IonContent>
        <IonList>
        <IonItem button >
            <IonIcon icon={add}/>  
          </IonItem>
          <IonItem button >
            <IonIcon icon={add}/>  
          </IonItem>
      </IonList>

        </IonContent>
        </IonPage>
        );
};

export default DetailPage;