import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const login = (email, password) => (dispatch) => {
  request
    .post(`${baseUrl}/logins`)
    .send({email, password})
    .then(response => dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response.body
    }))
    .catch(error => {
      if( error.status === 400) {
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: error.response.body.message || 'Unknown Error'
        })
      }

      else {
        console.error(error)
      }
    })
}
