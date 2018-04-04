import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const FETCHED_ALL_BATCHES = 'FETCHED_ALL_BATCHES'
export const FETCH_BATCH = 'FETCH_BATCH'
export const CREATED_BATCH = 'CREATED_BATCH'


export const fetchAllBatches = () => (dispatch, getState) => {
  //const state = getState()
  //const jwt = state.currentUser.jwt
  request
    .get(`${baseUrl}/batches`)
   //.set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCHED_ALL_BATCHES,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const createBatch = (batch) => (dispatch, getState) => {
  //const state = getState()
  //const jwt = state.currentUser.jwt
  request
    .post(`${baseUrl}/batches`)
  //  .set('Authorization', `Bearer ${jwt}`)
    .send(batch)
    .then(response => dispatch({
      type: CREATED_BATCH,
      payload: response.body
    }))
}

export const fetchBatch = (batchId) => (dispatch) => {
  request
    .get(`${baseUrl}/batches/${batchId}`)
    .then(response => dispatch({
      type: FETCH_BATCH,
      payload: response.body
    }))
    .catch(err => alert(err))
}
