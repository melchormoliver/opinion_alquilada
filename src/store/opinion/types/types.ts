export interface RoomState {
  rooms: string[];
}

export const ADD_ROOM = 'ADD_ROOM';
export const DELETE_ROOM = 'DELETE_ROOM';
export const EDIT_ROOM = 'EDIT_ROOM';

interface AddRoomAction {
  type: typeof ADD_ROOM;
  payload: string;
}

interface DeleteRoomAction {
  type: typeof DELETE_ROOM;
  payload: string;
}

interface EditRoomAction {
  type: typeof EDIT_ROOM;
  payload: string;
}

export type RoomActionTypes = AddRoomAction | DeleteRoomAction | EditRoomAction;
