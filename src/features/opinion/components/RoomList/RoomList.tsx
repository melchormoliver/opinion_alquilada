import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonReorder,
  IonReorderGroup,
} from '@ionic/react';
import React, { MutableRefObject, useEffect, useState } from 'react';
import { ItemReorderEventDetail } from '@ionic/core';
import { addOutline, pencil, trash } from 'ionicons/icons';
import { useHistory } from 'react-router';
import { v4 } from 'uuid';
interface DescribableRoomProps {
  title: string;
  items?: string[];
  icon: string;
  slidesRef: MutableRefObject<HTMLIonSlidesElement>;
}

const DescribableRoom: React.FC<DescribableRoomProps> = ({
  title,
  items = [],
  icon,
  slidesRef,
}) => {
  const history = useHistory();
  const [myItems, setMyItems] = useState<string[]>(items);
  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    event.detail.complete();
  };

  useEffect(() => {
    setMyItems(items);
  }, [items]);

  const deleteItem = async (id: string) => {
    setMyItems([...myItems.filter((elem) => elem !== id)]);
  };

  const addOrEditItem = async (id?: string) => {
    if (id) {
      // edit
      history.push(`/opinion/room/${id}`);
    } else {
      // new
      const key = v4();
      history.push(`/opinion/room/${key}`);
    }
  };

  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={icon} slot='start' />
        <IonLabel>{title}</IonLabel>
        <IonButton fill='solid' slot='end' onClick={() => addOrEditItem()}>
          <IonIcon icon={addOutline} />
        </IonButton>
      </IonItem>

      <IonCardContent>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {myItems.map((item) => (
            <IonItemSliding
              key={item}
              onIonDrag={() => {
                slidesRef.current.lockSwipes(true);
                setTimeout(() => {
                  slidesRef.current.lockSwipes(false);
                }, 2000);
              }}
            >
              <IonItemOptions side='start'>
                <IonItemOption onClick={() => deleteItem(item)} color='danger'>
                  <IonIcon slot='icon-only' icon={trash} />
                </IonItemOption>
              </IonItemOptions>
              <IonItem
                key={item}
                onClick={() => {
                  history.push(`/opinion/room/${item}`);
                }}
              >
                <IonLabel>{item}</IonLabel>
                <IonIcon
                  icon={pencil}
                  slot='end'
                  onClick={() => addOrEditItem(item)}
                />
                <IonReorder slot='end'></IonReorder>
              </IonItem>
              <IonItemOptions side='end'>
                <IonItemOption onClick={() => deleteItem(item)} color='danger'>
                  <IonIcon slot='icon-only' icon={trash} />
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonReorderGroup>
      </IonCardContent>
    </IonCard>
  );
};

export default DescribableRoom;
