import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const CREATED_STUDENT = 'CREATED_STUDENT'

export const createStudent = (student, batchId) => (dispatch, getState) => {
  request
    .post(`${baseUrl}batches/${batchId}/students`)
    .send(student)
    .then(response => dispatch({
      type: CREATED_STUDENT,
      payload: response.body
    }))
}
