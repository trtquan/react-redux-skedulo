const cache = store => next => action => {
  // handle FETCH action only
  if (action.type !== 'GET_USERS') {
    return next(action);
  }

  // check if cache is available
  if (!data) {
    // forward the call to live middleware
    return next(action);
  }
  return store.dispatch({ type: 'RECEIVE', payload: { data: `${data} (from cache)` } });
}

export default cache;