import { FETCHED_ALL_BATCHES, CREATED_BATCH } from '../actions/batches'

export default function (state=[], action) {
  switch(action.type) {
    case FETCHED_ALL_BATCHES:
      return action.payload
    case CREATED_BATCH:
      return [...state, action.payload]
    default:
      return state
  }
}
