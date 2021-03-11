import {
  ADD_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
  Room,
  RoomActionTypes,
} from './types';

export const addRoom = (newMessage: Room): RoomActionTypes => {
  return {
    type: ADD_ROOM,
    payload: newMessage,
  };
};

export const deleteRoom = (roomId: string): RoomActionTypes => {
  return {
    type: DELETE_ROOM,
    payload: roomId,
  };
};

export const editRoom = (roomId: Room): RoomActionTypes => {
  return {
    type: EDIT_ROOM,
    payload: roomId,
  };
};
