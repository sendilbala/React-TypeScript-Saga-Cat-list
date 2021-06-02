import { all, call, fork, put, takeLatest, select } from 'redux-saga/effects';

import { UploadCatImageActionTypes } from '../../types/UploadCatImage.types';
import {
  fetchUploadCatImageError,
  fetchUploadCatImageSuccess,
  fetchUploadCatImageRequest
} from './UploadCatImageContainer.actions';
import { apiEndPoints, apiKey } from '../../../../constants/apis';
import { postFile } from '../../../../utils/httpClient';
import { routeUrls } from '../../../../routes';
import { push } from 'react-router-redux';


export function* uploadCatImage(action: ReturnType<typeof fetchUploadCatImageRequest>) {


  try {

      console.log("inside")

    const { file, subId } = action.payload;

    console.log(action.payload);
    const url = apiEndPoints.API_BASE_URL + apiEndPoints.UPLOAD_CAT_IMAGE;
    const res = yield call(postFile, url, {file : file, sub_id: subId});

  console.log(res)

        yield put(fetchUploadCatImageError({ error: { message: 'An unknown error occured.' } }));

    if (res.data.error) {
      yield put(fetchUploadCatImageError(res.data.error));
    } else {
      yield put(fetchUploadCatImageSuccess(res.data));
      
      yield put(push(routeUrls.HOME_URL));
    }

  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(fetchUploadCatImageError({ error: { message: err.stack } }));
    } else {
      yield put(fetchUploadCatImageError({ error: { message: 'An unknown error occured.' } }));
    }
  }
}



export function* watchUploadCatImageRequest() {
  yield all([takeLatest(UploadCatImageActionTypes.UPLOAD_CAT_IMAGE_REQUEST, uploadCatImage)]);
}



function* UploadCatImageSaga() {
  yield all([fork(watchUploadCatImageRequest)]);
}

export default UploadCatImageSaga;
