import axios from 'axios';
import { formatDate } from '../shared/custom'

export const fetchBeers = async (page = 1, per_page = 10, brewedBefore = '', brewedAfter = '', dispatch) => {
  try {
    dispatch(setLoader(true))
    let api_url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}`;
    if (brewedBefore) api_url += `&brewed_before=${formatDate(brewedBefore)}`
    if (brewedAfter) api_url += `&brewed_after=${formatDate(brewedAfter)}`
    const response = await axios.get(api_url);

    if(response.status == '200') {
        dispatch(setLoader('false'))
        return { type: 'FETCH_BEERS_SUCCESS', payload: response.data };
      }
    else { dispatch(setLoader('true')) }

  }
  catch (error) {
    return { type: 'FETCH_BEERS_FAILURE', payload: error.message };
  }
};

export const setCurrentPage = (page) => {
  return { type: 'SET_CURRENT_PAGE', payload: page };
};

export const setLoader = (value) => {
  return { type: 'SET_LOADER_STATUS', payload: value }
}  