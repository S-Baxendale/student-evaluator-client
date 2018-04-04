import { FETCHED_ALL_BATCHES, CREATED_BATCH } from '../actions/batches'
import { CREATED_STUDENT } from '../actions/students'

export default function (state=[], action) {
  switch(action.type) {
    case FETCHED_ALL_BATCHES:
      return action.payload
    case CREATED_BATCH:
      return [...state, action.payload]
    case CREATED_STUDENT:
      return [...state, action.payload]
    default:
      return state
  }
}
