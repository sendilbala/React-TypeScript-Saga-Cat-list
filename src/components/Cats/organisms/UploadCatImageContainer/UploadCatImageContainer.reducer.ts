import { Reducer } from 'redux';

import {
  UploadCatImageActionTypes,
  UploadCatImageState,
} from '../../types/UploadCatImage.types';

// Type-safe initialState!
export const initialState: UploadCatImageState = {
  data: null,
  error: null,
  isRequest: false,
};


const reducer: Reducer<UploadCatImageState> = (state = initialState, action) => {
  switch (action.type) {
    case UploadCatImageActionTypes.UPLOAD_CAT_IMAGE_REQUEST: {
      return { ...state, isRequest: true };
    }
    case UploadCatImageActionTypes.UPLOAD_CAT_IMAGE_SUCCESS: {
      return { ...state, isRequest: false, data: action.payload };
    }
    case UploadCatImageActionTypes.UPLOAD_CAT_IMAGE_FAILURE: {
      return { ...state, isRequest: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index` .
export { reducer as UploadCatImageReducer };