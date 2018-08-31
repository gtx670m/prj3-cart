import * as types from '../constants/ActionTypes';
import * as messages from '../constants/Message';

var initialState = messages.MSG_WELCOME;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default: return state;
  }
}


