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
import React, { useState } from 'react';
import { ItemReorderEventDetail } from '@ionic/core';
import { addOutline, pencil } from 'ionicons/icons';
import { useHistory } from 'react-router';
interface DescribableRoomProps {
  title: string;
  items: string[];
  icon: string;
}

const DescribableRoom: React.FC<DescribableRoomProps> = ({
  title,
  items,
  icon,
}) => {
  const history = useHistory();
  const [myItems] = useState<JSX.Element[]>(
    items.map((item, index) => (
      <IonItem
        key={item}
        onClick={() => {
          history.push(`/opinion/room/${item}`);
        }}
      >
        <IonLabel>{item}</IonLabel>
        <IonIcon icon={pencil} slot='end' />
        <IonReorder slot='end'></IonReorder>
      </IonItem>
    ))
  );
  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    event.detail.complete();
  };

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
