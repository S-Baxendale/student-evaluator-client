import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const CREATED_STUDENT = 'CREATED_STUDENT'
export const FETCHED_STUDENT = 'FETCHED_STUDENT'

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
