import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const CREATED_STUDENT = 'CREATED_STUDENT'
export const FETCHED_STUDENT = 'FETCHED_STUDENT'
export const REMOVED_STUDENT = 'REMOVED_STUDENT'
export const UPDATED_STUDENT = 'UPDATED_STUDENT'

export const createStudent = (student, batchId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
    .post(`${baseUrl}/batches/${batchId}/students`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(student)
    .then(response => dispatch({
      type: CREATED_STUDENT,
      payload: response.body
    }))
}

export const fetchStudent = (studentId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
      .get(`${baseUrl}/students/${studentId}`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(response => dispatch({
        type: FETCHED_STUDENT,
        payload: response.body
      }))
      .catch(err => alert(err))
  }


export const removeStudent = (studentId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
    .set('Authorization', `Bearer ${jwt}`)
    .delete(`${baseUrl}/students/${studentId}`)
    .then(response => dispatch({
      type: REMOVED_STUDENT,
      payload: studentId
    }))

}

export const updateStudent = (studentId, updates) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
    .put(`${baseUrl}/students/${studentId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(updates)
    .then(response => dispatch ({
      type: UPDATED_STUDENT,
      payload: response.body
    }))
}
