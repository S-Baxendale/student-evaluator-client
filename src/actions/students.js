import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const CREATED_STUDENT = 'CREATED_STUDENT'

export const createStudent = (student) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/batches`)
    .send(student)
    .then(response => dispatch({
      type: CREATED_STUDENT,
      payload: response.body
    }))
}
