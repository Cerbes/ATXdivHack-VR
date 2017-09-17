import {
  LOAD_FEARS
} from '../actions'

import { spider } from './spider'

export default (state = spider, action) => {
  switch (action.type) {
    case LOAD_FEARS:
      return Object.assign(state, action.payload)
    default:
      return state;
  }
}
