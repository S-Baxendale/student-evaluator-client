import { FETCHED_STUDENT } from '../actions/students'
import { CREATED_EVALUATION } from '../actions/evaluations'


export default function (state = null, action) {
  switch(action.type) {
    case FETCHED_STUDENT:
      return action.payload
    case CREATED_EVALUATION:
      return state.evaluations.concat(action.payload)
    default:
      return state
  }
}
