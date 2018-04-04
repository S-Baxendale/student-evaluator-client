import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const CREATED_EVALUATION = 'CREATED_EVALUATION'

export const createEvaluation = (evaluation, studentId, teacher) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
    .post(`${baseUrl}/evaluations/students/${studentId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(evaluation, teacher)
    .then(response => dispatch({
      type: CREATED_EVALUATION,
      payload: response.body
    }))
}
