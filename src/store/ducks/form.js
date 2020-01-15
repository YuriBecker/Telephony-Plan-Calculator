// Types
export const Types = {
  SET_ORIGIN_DDD: 'form/SET_ORIGIN_DDD',
  SET_DESTINY_DDD: 'form/SET_DESTINY_DDD',
  SET_DURATION: 'form/SET_DURANTION',
  SET_PLAN: 'form/SET_PLAN',
  RESET: 'form/RESET',
};

const INITIAL_STATE = {
  origin: null,
  destiny: null,
  duration: 1,
  plan: null,
};

// Reducer
const userReducer = (state = INITIAL_STATE, action) => {
  const { type, origin, destiny, duration, plan } = action;

  switch (type) {
    case Types.SET_ORIGIN_DDD:
      return {
        ...state,
        origin,
      };

    case Types.SET_DESTINY_DDD:
      return {
        ...state,
        destiny,
      };

    case Types.SET_DURATION:
      return {
        ...state,
        duration,
      };

    case Types.SET_PLAN:
      return {
        ...state,
        plan,
      };

    case Types.RESET:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

// Action Creators
export const actions = {
  setOriginDDD: origin => {
    return { type: Types.SET_ORIGIN_DDD, origin };
  },
  setDestinyDDD: destiny => {
    return { type: Types.SET_DESTINY_DDD, destiny };
  },
  setDuration: duration => {
    return { type: Types.SET_DURATION, duration };
  },
  setPlan: plan => {
    return { type: Types.SET_PLAN, plan };
  },
  reset: () => {
    return { type: Types.RESET };
  },
};

export default userReducer;
