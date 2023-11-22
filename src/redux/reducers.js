const initialState = {
    beers: [],
    currentPage: 1,
    error: null,
    loaderStatus:'false'
  };
  
  const beerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_BEERS_SUCCESS':
        return { ...state, beers: action.payload, error: null };
      case 'FETCH_BEERS_FAILURE':
        return { ...state, error: action.payload };
      case 'SET_CURRENT_PAGE':
        return { ...state, currentPage: action.payload };
      case 'SET_LOADER_STATUS':
        return { ...state, loaderStatus: action.payload }  
      default:
        return state;
    }
  };
  
  export default beerReducer;
  
