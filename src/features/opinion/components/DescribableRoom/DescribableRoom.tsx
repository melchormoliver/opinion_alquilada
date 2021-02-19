import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonReorder,
  IonReorderGroup,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { ItemReorderEventDetail } from '@ionic/core';
import { addOutline, home } from 'ionicons/icons';

interface DescribableRoom {
  title: string;
  items: string[];
  icon: string;
}

const DescribableRoom: React.FC<DescribableRoom> = ({ title, items, icon }) => {
  const [myItems, setMyitems] = useState<JSX.Element[]>();

  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    event.detail.complete();
  };

  useEffect(() => {
    setMyitems(
      items.map((item) => (
        <IonReorder>
          <IonItem>
            <IonLabel>{item}</IonLabel>
          </IonItem>
        </IonReorder>
      ))
    );
  }, []);

  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={icon} slot='start' />
        <IonLabel>{title}</IonLabel>
        <IonButton fill='solid' slot='end'>
          <IonIcon icon={addOutline} />
        </IonButton>
      </IonItem>

      <IonCardContent>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {myItems}
        </IonReorderGroup>
      </IonCardContent>
    </IonCard>
  );
};

export default DescribableRoom;
