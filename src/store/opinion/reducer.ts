import {
  RoomState,
  RoomActionTypes,
  ADD_ROOM,
  DELETE_ROOM,
  EDIT_ROOM,
  Room,
} from './types';

const initialState: RoomState = {
  rooms: [],
};

const chatReducer = (
  state = initialState,
  action: RoomActionTypes
): RoomState => {
  switch (action.type) {
    case ADD_ROOM: {
      return {
        rooms: [...state.rooms, action.payload],
      };
    }
    case DELETE_ROOM:
      return {
        rooms: [
          ...state.rooms.filter((room: Room) => room.id !== action.payload),
        ],
      };
    case EDIT_ROOM:
      return { rooms: state.rooms };

    default:
      return state;
  }
};

export default chatReducer;