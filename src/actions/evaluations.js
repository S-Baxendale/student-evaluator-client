import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const CREATED_EVALUATION = 'CREATED_EVALUATION'

export const createEvaluation = (studentId, evaluation, teacher) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/evaluations/students/${studentId}`)
    .send(evaluation)
    .then(response => dispatch({
      type: CREATED_EVALUATION,
      payload: response.body
    }))
}
