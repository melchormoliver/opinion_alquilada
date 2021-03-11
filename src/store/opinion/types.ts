export interface Room {
  id: string;
  title: string;
  haveHumidity: boolean;
  roofHumidity: boolean;
  wallHumidity: boolean;
  floorHumidity: boolean;
  haveWindow: boolean;
  fromLight: string;
  toLight: string;
  puffyOnRain: boolean;
  hearNeighbour: boolean;
  extraOpinion: string;
}

export interface RoomState {
  rooms: Room[];
}

export const ADD_ROOM = 'ADD_ROOM';
export const DELETE_ROOM = 'DELETE_ROOM';
export const EDIT_ROOM = 'EDIT_ROOM';

interface AddRoomAction {
  type: typeof ADD_ROOM;
  payload: Room;
}

interface DeleteRoomAction {
  type: typeof DELETE_ROOM;
  payload: string;
}

interface EditRoomAction {
  type: typeof EDIT_ROOM;
  payload: Room;
}

export type RoomActionTypes = AddRoomAction | DeleteRoomAction | EditRoomAction;
