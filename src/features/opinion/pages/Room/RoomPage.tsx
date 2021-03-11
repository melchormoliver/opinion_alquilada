import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTextarea,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import { closeOutline, saveOutline } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { addRoom, editRoom } from '../../../../store/opinion/actions';
import { Room } from '../../../../store/opinion/types';
import { RootState } from '../../../../store/root-reducer';
import styles from './RoomPage.module.scss';
import routesOpinion from '../../router/routes';
interface Params
  extends RouteComponentProps<{
    idRoom: string;
  }> {}

const RoomPage: React.FC<Params> = ({ match, history }) => {
  const initRoom: Room = {
    haveHumidity: false,
    haveWindow: false,
    puffyOnRain: false,
    fromLight: '',
    toLight: '',
    roofHumidity: false,
    wallHumidity: false,
    floorHumidity: false,
    hearNeighbour: false,
    extraOpinion: '',
    title: '',
    id: match.params.idRoom,
  };
  const [room, setRoom] = useState<Room>(initRoom);
  const submitRef = useRef<HTMLIonButtonElement>(null);
  const rooms = useSelector((state: RootState) => state.opinion.rooms);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const onSubmit = () => {
    debugger;
    const exists = rooms.findIndex((myRoom: Room) => myRoom.id === room.id);
    const toAdd: Room = {
      ...room,
      id: room.id,
      title: room.title,
      roofHumidity: room.haveHumidity && room.roofHumidity,
      wallHumidity: room.haveHumidity && room.wallHumidity,
      floorHumidity: room.haveHumidity && room.floorHumidity,
      fromLight: room.haveWindow ? room.fromLight : '',
      toLight: room.haveWindow ? room.toLight : '',
      puffyOnRain: room.haveWindow && room.puffyOnRain,
    };
    if (exists >= 0) {
      // edicion
      dispatch(editRoom(toAdd));
    } else {
      // nuevo
      dispatch(addRoom(toAdd));
    }
    history.push(routesOpinion);
  };

  useEffect(() => {
    console.log('useEffect independiente', room.id);
    const editRoom = rooms.find((savedRoom) => savedRoom.id === room.id)!;
    if (editRoom) {
      // edicion
      setRoom({ ...editRoom });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/opinion' type='button' />
            <IonTitle> {t('roompage.title')} </IonTitle>
          </IonButtons>
          <IonButtons slot='end'>
            <IonButton
              id='id-saveOpinion'
              onClick={() => submitRef.current!.click()}
            >
              <IonIcon
                size='small'
                className='ion-margin ion-justify-content-center'
                icon={saveOutline}
              />
            </IonButton>
            <IonButton id='id-closeWindow'>
              <IonIcon
                size='small'
                className='ion-margin ion-justify-content-center'
                icon={closeOutline}
                onClick={() => {}}
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'>
                  {t('roompage.room.input')}
                </IonLabel>
                <IonInput
                  placeholder='Pieza, Living...'
                  value={room.title}
                  name='roomname'
                  id='id-roomname'
                  type='text'
                  onIonChange={(e) =>
                    setRoom({ ...room, title: e.detail.value! })
                  }
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>{t('roompage.havehumidity.toggle')}</IonLabel>
                <IonToggle
                  slot='end'
                  checked={room.haveHumidity}
                  id='id-haveHumidity'
                  name='haveHumidity'
                  value={String(room.haveHumidity)}
                  onIonChange={(e) =>
                    setRoom({ ...room, haveHumidity: e.detail.checked })
                  }
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {room.haveHumidity && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <IonList>
                  <IonTitle>{t('roompage.havehumidity.title')}</IonTitle>
                  <IonItem>
                    <IonLabel>{t('roompage.havehumidity.roof.item')}</IonLabel>
                    <IonToggle
                      slot='start'
                      checked={room.roofHumidity}
                      id='id-roofHumidity'
                      name='roofHumidity'
                      value={String(room.roofHumidity)}
                      onIonChange={(e) =>
                        setRoom({
                          ...room,
                          roofHumidity: e.detail.checked,
                        })
                      }
                    />
                  </IonItem>
                  <IonItem>
                    <IonLabel>{t('roompage.havehumidity.wall.item')}</IonLabel>
                    <IonToggle
                      slot='start'
                      checked={room.wallHumidity}
                      id='id-wallHumidity'
                      name='wallHumidity'
                      value={String(room.wallHumidity)}
                      onIonChange={(e) =>
                        setRoom({ ...room, wallHumidity: e.detail.checked })
                      }
                    />
                  </IonItem>
                  <IonItem>
                    <IonLabel>{t('roompage.havehumidity.floor.item')}</IonLabel>
                    <IonToggle
                      slot='start'
                      checked={room.floorHumidity}
                      id='id-floorHumidity'
                      name='floorHumidity'
                      value={String(room.floorHumidity)}
                      onIonChange={(e) =>
                        setRoom({ ...room, wallHumidity: e.detail.checked })
                      }
                    />
                  </IonItem>
                </IonList>
              </IonCol>
            </IonRow>
          )}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>{t('roompage.havewindow.toggle')}</IonLabel>
                <IonToggle
                  slot='end'
                  id='id-haveWindow'
                  name='haveWindow'
                  checked={room.haveWindow}
                  onIonChange={(e) =>
                    setRoom({ ...room, haveWindow: e.detail.checked })
                  }
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {room.haveWindow && (
            <>
              <IonRow>
                <IonCol className='ion-text-center'>
                  <IonTitle>{t('roompage.havewindow.title')}</IonTitle>
                </IonCol>
              </IonRow>
              <IonRow className='ion-justify-content-between'>
                <IonCol>
                  <IonItem className='ion-text-center'>
                    <IonLabel position='stacked'>
                      {t('roompage.havewindow.from.datetime')}
                    </IonLabel>
                    <IonDatetime
                      placeholder='09:00'
                      displayFormat='HH:mm'
                      id='id-fromLight'
                      name='fromLight'
                      value={room.fromLight}
                      onIonChange={(e) =>
                        setRoom({ ...room, fromLight: e.detail.value! })
                      }
                    />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem className='ion-text-center'>
                    <IonLabel position='floating'>
                      {t('roompage.havewindow.to.datetime')}
                    </IonLabel>
                    <IonDatetime
                      placeholder='10:00'
                      name='toLight'
                      id='id-toLight'
                      displayFormat='HH:mm'
                      value={room.toLight}
                      onIonChange={(e) =>
                        setRoom({ ...room, toLight: e.detail.value! })
                      }
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel>
                      {t('roompage.havewindow.puffyOnRain.toggle')}
                    </IonLabel>
                    <IonToggle
                      id='id-puffyWindow'
                      name='puffyWindowOnRain'
                      checked={room.puffyOnRain}
                      onIonChange={(e) =>
                        setRoom({ ...room, puffyOnRain: e.detail.checked })
                      }
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
            </>
          )}
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>{t('roompage.listenNeighbors.toogle')}</IonLabel>
                <IonToggle
                  slot='end'
                  checked={room.hearNeighbour}
                  name='listenNeighbors'
                  id='id-listenNeighbors'
                  value={String(room.hearNeighbour)}
                  onIonChange={(e) =>
                    setRoom({ ...room, hearNeighbour: e.detail.checked })
                  }
                />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>{t('roompage.extraopinion.textarea')}</IonLabel>

              <IonTextarea
                //color='primary'
                autoGrow
                //color='primary'
                id='id-extraOpinion'
                name='extraOpinion'
                inputMode='text'
                value={room.extraOpinion}
                className={styles.extraOpinion}
                maxlength={500}
                placeholder={t('roompage.extraopinion.placeholder.textarea.1')}
                onIonChange={(e) =>
                  setRoom({ ...room, extraOpinion: e.detail.value! })
                }
              ></IonTextarea>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonButton
          ref={submitRef}
          onClick={onSubmit}
          expand='block'
          type='submit'
        >
          LISTO
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default RoomPage;
