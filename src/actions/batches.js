import * as request from 'superagent'

const baseUrl = 'http://localhost:4008'

export const FETCHED_ALL_BATCHES = 'FETCHED_ALL_BATCHES'

export const fetchAllBatches = () => (dispatch) => {
  request
    .get(`${baseUrl}/batches`)
    .then(response => dispatch({
      type: FETCHED_ALL_BATCHES,
      payload: response.body.batches
    }))
    .catch(err => alert(err))
}
