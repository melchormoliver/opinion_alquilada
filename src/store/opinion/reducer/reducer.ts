import {
  RoomState,
  RoomActionTypes,
  ADD_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
} from '../types/types';

const initialState: RoomState = {
  rooms: ['pieza1', 'pieza2', 'pieza3'],
};

const chatReducer = (
  state = initialState,
  action: RoomActionTypes
): RoomState => {
  switch (action.type) {
    case ADD_ROOM: {
      debugger;
      return {
        rooms: [...state.rooms, action.payload],
      };
    }
    case DELETE_ROOM:
      return {
        rooms: state.rooms.filter((room) => room !== action.payload),
      };
    case EDIT_ROOM:
      return { rooms: state.rooms };

    default:
      return state;
  }
};

export default chatReducer;
