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
import { closeOutline, saveOutline, settingsOutline } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addRoom } from '../../../../store/opinion/actions';
import { Room } from '../../../../store/opinion/types';
import { RootState } from '../../../../store/root-reducer';
import styles from './RoomPage.module.scss';

interface Params {
  idRoom: string;
}

const RoomPage: React.FC = () => {
  const { idRoom } = useParams<Params>();
  const [isHumid, setIsHumid] = useState(false);
  const [haveWindow, setHaveWindow] = useState(false);
  const [puffyWindowOnRain, setPuffyWindowOnRain] = useState(false);
  const [fromLight, setFromLight] = useState('09:00');
  const [toLight, setToLight] = useState('10:00');
  const [roofHumidity, setRoofHumidity] = useState(false);
  const [wallHumidity, setWallHumidity] = useState(false);
  const [floorHumidity, setFloorHumidity] = useState(false);
  const [listenNeighbors, setListenNeighbors] = useState(false);
  const [extraOpinion, setExtraOpinion] = useState('');
  const [title, setTitle] = useState('');

  const submitRef = useRef<HTMLIonButtonElement>(null);
  const rooms = useSelector((state: RootState) => state.opinion.rooms);
  const dispatch = useDispatch();
  const history = useHistory();

  const { t } = useTranslation();
  const onSubmit = () => {
    const exists = rooms.findIndex((room: Room) => room.id === idRoom);
    if (exists >= 0) {
      // edicion
    } else {
      // nuevo
      const toAdd: Room = {
        id: idRoom,
        title: '',
        haveHumidity: false,
        roofHumidity: false,
        wallHumidity: false,
        floorHumidity: false,
        haveWindow: false,
        fromLight: '',
        toLight: '',
        puffyOnRain: false,
        hearNeighbour: false,
      };
      dispatch(addRoom(toAdd));
      history.goBack();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/tabs/feed' />
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
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'>
                  {t('roompage.room.input')}
                </IonLabel>
                <IonInput
                  placeholder='Pieza, Living...'
                  value={title}
                  name='roomname'
                  id='id-roomname'
                  type='text'
                  onIonChange={(e) => setTitle(e.detail.value!)}
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
                  checked={isHumid}
                  id='id-haveHumidity'
                  name='haveHumidity'
                  value={String(isHumid)}
                  onIonChange={(e) => setIsHumid(e.detail.checked)}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {isHumid && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <IonList>
                  <IonTitle>{t('roompage.havehumidity.title')}</IonTitle>
                  <IonItem>
                    <IonLabel>{t('roompage.havehumidity.roof.item')}</IonLabel>
                    <IonToggle
                      slot='start'
                      checked={roofHumidity}
                      id='id-roofHumidity'
                      name='roofHumidity'
                      value={String(roofHumidity)}
                      onIonChange={(e) => setRoofHumidity(e.detail.checked)}
                    />
                  </IonItem>
                  <IonItem>
                    <IonLabel>{t('roompage.havehumidity.wall.item')}</IonLabel>
                    <IonToggle
                      slot='start'
                      checked={wallHumidity}
                      id='id-wallHumidity'
                      name='wallHumidity'
                      value={String(wallHumidity)}
                      onIonChange={(e) => setWallHumidity(e.detail.checked)}
                    />
                  </IonItem>
                  <IonItem>
                    <IonLabel>{t('roompage.havehumidity.floor.item')}</IonLabel>
                    <IonToggle
                      slot='start'
                      checked={floorHumidity}
                      id='id-floorHumidity'
                      name='floorHumidity'
                      value={String(floorHumidity)}
                      onIonChange={(e) => setFloorHumidity(e.detail.checked)}
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
                  checked={haveWindow}
                  onIonChange={(e) => setHaveWindow(e.detail.checked)}
                />
              </IonItem>
            </IonCol>
          </IonRow>
          {haveWindow && (
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
                      displayFormat='HH:mm'
                      id='id-fromLight'
                      name='fromLight'
                      value={fromLight}
                      onIonChange={(e) => setFromLight(e.detail.value!)}
                    />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem className='ion-text-center'>
                    <IonLabel position='floating'>
                      {t('roompage.havewindow.to.datetime')}
                    </IonLabel>
                    <IonDatetime
                      name='toLight'
                      id='id-toLight'
                      displayFormat='HH:mm'
                      value={toLight}
                      onIonChange={(e) => setToLight(e.detail.value!)}
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
                      checked={puffyWindowOnRain}
                      onIonChange={(e) =>
                        setPuffyWindowOnRain(e.detail.checked)
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
                  checked={listenNeighbors}
                  name='listenNeighbors'
                  id='id-listenNeighbors'
                  value={String(listenNeighbors)}
                  onIonChange={(e) => setListenNeighbors(e.detail.checked)}
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
                value={extraOpinion}
                className={styles.extraOpinion}
                maxlength={500}
                placeholder={t('roompage.extraopinion.placeholder.textarea.1')}
                onIonChange={(e) => setExtraOpinion(e.detail.value!)}
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
