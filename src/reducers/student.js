import { FETCHED_STUDENT } from '../actions/students'

export default function (state = null, action) {
  switch(action.type) {
    case FETCHED_STUDENT:
      return action.payload
    default:
      return state
  }
}
