import { FETCH_BATCH } from '../actions/batches'
import { CREATED_STUDENT, REMOVED_STUDENT } from '../actions/students'
import { CREATED_EVALUATION } from '../actions/evaluations'

export default function (state = null, action) {
  switch(action.type) {
    case FETCH_BATCH:
      return action.payload
    case CREATED_STUDENT:
      return {...state, students: [...state.students, action.payload]}
      case REMOVED_STUDENT:
        return  { ...state, students: [...state.students.filter(student => student.id !== action.payload)] }
        case CREATED_EVALUATION:
          return {...state, ...action.payload}
    default:
      return state
    }
  }
