import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';


import { CatListReducer } from '../components/Cats/organisms/CatListContainer/CatListContainer.reducer';
import CatListSaga from '../components/Cats/organisms/CatListContainer/CatListContainer.sagas';
import { CatListState } from '../components/Cats/types/CatList.types';

import { UploadCatImageReducer } from '../components/Cats/organisms/UploadCatImageContainer/UploadCatImageContainer.reducer';
import UploadCatImageSaga from '../components/Cats/organisms/UploadCatImageContainer/UploadCatImageContainer.sagas';
import { UploadCatImageState } from '../components/Cats/types/UploadCatImage.types';

export interface ApplicationState {
  
  catListState: CatListState;
  uploadCatImageState: UploadCatImageState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    catListState: CatListReducer,
    uploadCatImageState: UploadCatImageReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([
    fork(CatListSaga),
    fork(UploadCatImageSaga)
  ]);
}
