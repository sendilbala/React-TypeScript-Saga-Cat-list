import { Reducer } from 'redux';

import {
  CatListActionTypes,
  CatListState,
} from '../../types/CatList.types';

// Type-safe initialState!
export const initialState: CatListState = {
  listData: [],
  error: null,
  isRequest: false,
};


const reducer: Reducer<CatListState> = (state = initialState, action) => {
  switch (action.type) {
    case CatListActionTypes.CAT_LIST_REQUEST: {
      return { ...state, isRequest: true };
    }
    case CatListActionTypes.CAT_LIST_SUCCESS: {
      return { ...state, isRequest: false, listData: action.payload };
    }
    case CatListActionTypes.CAT_LIST_FAILURE: {
      return { ...state, isRequest: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index` .
export { reducer as CatListReducer };