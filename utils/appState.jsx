/** 
  * Using this instead of BSON.ObjectId() because of BSON introducing
  * a SharedArrayBuffer, which will require cross-origin isolation.
  */
export const ObjectId = (rnd = r16 => Math.floor(r16).toString(16)) =>
    rnd(Date.now()/1000) + ' '.repeat(16).replace(/./g, () => rnd(Math.random()*16));

export const initialState = {
  _id: "",
  name: "",
  userId: "",
  isLoading: false,
  isError: false,
}

const actionConstants = {
  SET_ID: "SET_ID",
  SET_FILTER: "SET_FILTER",
  SET_NAME: "SET_NAME",
  SET_USERID: "SET_USERID",
  RESET: "RESET",
  START_LOADING: "START_LOADING",
  FINISH_LOADING: "FINISH_LOADING",
}

export function stateReducer(state, action) {
  switch (action.type) {
    case actionConstants.SET_ID:
      return { ...state, _id: action.payload.id }
    case actionConstants.SET_NAME:
      return { ...state, name: action.payload.name }
    case actionConstants.SET_USERID:
      return { ...state, userId: action.payload.userId }
    case actionConstants.RESET:
      return { ...state, ...initialState }
    case actionConstants.START_LOADING:
      return { ...state, isLoading: true }
    case actionConstants.FINISH_LOADING:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

/** Hmmm */
export function dispatchWrapper(dispatch) {
 return {
    setId: id => { 
      dispatch( {
        type: actionConstants.SET_ID,
        payload: { id }
      })
    },
    createId: () => {
      dispatch( {
        type: actionConstants.SET_ID,
        payload: {
          id: ObjectId()
        }
      })
    },
    setName: name => {
      dispatch( {
        type: actionConstants.SET_NAME,
        payload: { name }
      })
    },
    setUserId: userId => {
      dispatch( {
        type: actionConstants.SET_USERID,
        payload: { userId }
      })
    },
    reset: () => {
      dispatch( {
        type: actionConstants.RESET
      })
    },
    startLoading: () => {
      dispatch( {
        type: actionConstants.START_LOADING
      })
    },
    finishLoading: () => {
      dispatch( {
        type: actionConstants.FINISH_LOADING
      })
    },
  }
}

/*
const actions = {
  setId: id => { 
    return {
      type: actionConstants.SET_ID,
      payload: { id }
    }
  },
  createId: () => {
    return {
      type: actionConstants.SET_ID,
      payload: {
        id: ObjectId()
      }
    }
  },
  setName: name => {
    return {
      type: actionConstants.SET_NAME,
      payload: { name }
    }
  },
  setUserId: userId => {
    return {
      type: actionConstants.SET_USERID,
      payload: { userId }
    }
  },
  reset: () => {
    return {
      type: actionConstants.RESET
    }
  },
  startLoading: () => {
    return {
      type: actionConstants.START_LOADING
    }
  },
  finishLoading: () => {
    return {
      type: actionConstants.FINISH_LOADING
    }
  },
}
*/
