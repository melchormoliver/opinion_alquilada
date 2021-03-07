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
import { Room } from '../../../../store/opinion/types';
interface RoomListProps {
  title: string;
  items?: Room[];
  icon: string;
  slidesRef: MutableRefObject<HTMLIonSlidesElement>;
}

const RoomList: React.FC<RoomListProps> = ({
  title,
  items = [],
  icon,
  slidesRef,
}) => {
  const history = useHistory();
  const [myItems, setMyItems] = useState<Room[]>(items);
  const doReorder = (event: CustomEvent<ItemReorderEventDetail>) => {
    event.detail.complete();
  };

  useEffect(() => {
    setMyItems(items);
  }, [items]);

  const deleteItem = async (id: string) => {
    setMyItems([...myItems.filter((elem) => elem.id !== id)]);
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
  console.log('RoomList - PINTANDO', items);
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
          {myItems.map((item: Room) => (
            <IonItemSliding
              key={v4()}
              onIonDrag={() => {
                slidesRef.current.lockSwipes(true);
                setTimeout(() => {
                  slidesRef.current.lockSwipes(false);
                }, 2000);
              }}
            >
              <IonItemOptions side='start'>
                <IonItemOption
                  onClick={() => deleteItem(item.id)}
                  color='danger'
                >
                  <IonIcon slot='icon-only' icon={trash} />
                </IonItemOption>
              </IonItemOptions>
              <IonItem
                key={v4()}
                onClick={() => {
                  history.push(`/opinion/room/${item}`);
                }}
              >
                <IonLabel>{item.title}</IonLabel>
                <IonIcon
                  icon={pencil}
                  slot='end'
                  onClick={() => addOrEditItem(item.id)}
                />
                <IonReorder slot='end'></IonReorder>
              </IonItem>
              <IonItemOptions side='end'>
                <IonItemOption
                  onClick={() => deleteItem(item.id)}
                  color='danger'
                >
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

export default RoomList;
