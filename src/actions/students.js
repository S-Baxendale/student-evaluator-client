import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const CREATED_STUDENT = 'CREATED_STUDENT'
export const FETCHED_STUDENT = 'FETCHED_STUDENT'
export const REMOVED_STUDENT = 'REMOVED_STUDENT'
export const UPDATED_STUDENT = 'UPDATED_STUDENT'

export const createStudent = (student, batchId) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/batches/${batchId}/students`)
    .send(student)
    .then(response => dispatch({
      type: CREATED_STUDENT,
      payload: response.body
    }))
}

export const fetchStudent = (studentId) => (dispatch) => {
  request
      .get(`${baseUrl}/students/${studentId}`)
      .then(response => dispatch({
        type: FETCHED_STUDENT,
        payload: response.body
      }))
      .catch(err => alert(err))
  }


export const removeStudent = (studentId) => (dispatch) => {
  request
    .delete(`${baseUrl}/students/${studentId}`)
    .then(response => dispatch({
      type: REMOVED_STUDENT,
      payload: studentId
    }))

}

export const updateStudent = (studentId, updates) => (dispatch) => {
  request
    .put(`${baseUrl}/students/${studentId}`)
    .send(updates)
    .then(response => dispatch ({
      type: UPDATED_STUDENT,
      payload: response.body
    }))
}
