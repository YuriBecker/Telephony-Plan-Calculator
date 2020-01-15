// Types
export const Types = {
  SET_NAME: 'user/SET_NAME',
  CLEAR_NAME: 'user/CLEAR_NAME',
};

const INITIAL_STATE = {
  name: null,
};

// Reducer
const userReducer = (state = INITIAL_STATE, action) => {
  const { type, name } = action;

  switch (type) {
    case Types.SET_NAME:
      return {
        name,
      };

    case Types.CLEAR_NAME:
      return {
        name: null,
      };

    default:
      return state;
  }
};

// Action Creators
export const actions = {
  setName: name => {
    return { type: Types.SET_NAME, name };
  },
};

export default userReducer;
