import {
    IonButtons,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
  } from '@ionic/react';
import React from 'react';

  const DetailPage: React.FC = () => {
      return (
        <React.Fragment>
        <IonContent>
        <IonList>
        <div >
          <IonItem >
              <IonIcon name="add"></IonIcon>
            &nbsp;
           </IonItem>
          <IonItem >
  
          </IonItem>
        </div>
      </IonList>

        </IonContent>
        </React.Fragment>
        );
};

export default DetailPage;