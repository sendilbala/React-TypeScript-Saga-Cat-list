import { all, call, fork, put, takeLatest, select } from 'redux-saga/effects';

import { CatListActionTypes } from '../../types/CatList.types';
import {
  fetchCatListError,
  fetchCatListSuccess,
  favouriteCatRequest
} from './CatListContainer.actions';
import { apiEndPoints } from '../../../../constants/apis';
import { request ,  httpPost} from '../../../../utils/httpClient';


export function* getCatList() {
  try {
    const res = yield call(request, {
      method: 'GET',
      baseURL: apiEndPoints.API_BASE_URL,
      url: apiEndPoints.CAT_LIST,
    });

    if (res.data.error) {
      yield put(fetchCatListError(res.data.error));
    } else {
      yield put(fetchCatListSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchCatListError({ error: { message: err.stack } }));
    } else {
      yield put(fetchCatListError({ error: { message: 'An unknown error occured.' } }));
    }
  }
}

export function* setFavouriteCat(action: ReturnType<typeof favouriteCatRequest>) {
  try {
    const id = action.payload;
    const url = apiEndPoints.API_BASE_URL + apiEndPoints.CAT_FAVOURITE_REQUEST;
    const res = yield call(httpPost, url, {image_id: id});

    if (res.data.error) {
      console.log("error posting the favourite");
    } else {
      console.log("posted the favourite")  
    } 
  } catch (err) {
    if (err instanceof Error && err.stack) {
       console.log({ error: { message: err.stack } });
    } else {
      console.log({ error: { message: 'An unknown error occured.' } });
    }
  }
}


export function* watchGetCatListRequest() {
  yield all([takeLatest(CatListActionTypes.CAT_LIST_REQUEST, getCatList)]);
}

export function* watchSetFavouriteCat() {
  yield all([takeLatest(CatListActionTypes.CAT_FAVOURITE_REQUEST, setFavouriteCat)]);
}

function* CatListSaga() {
  yield all([fork(watchGetCatListRequest), fork(watchSetFavouriteCat)]);
}

export default CatListSaga;
