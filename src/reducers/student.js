import { FETCHED_STUDENT, UPDATED_STUDENT, REMOVED_STUDENT } from '../actions/students'
import { CREATED_EVALUATION } from '../actions/evaluations'


export default function (state = null, action) {
  switch(action.type) {
    case FETCHED_STUDENT:
      return action.payload
    case CREATED_EVALUATION:
      return {...state, evaluations: [...state.evaluations, action.payload]}
    case UPDATED_STUDENT:
      if(action.payload.id === state.id) {
        return {...state, ...action.payload }
      }
      else return state

    default:
      return state
  }
}
