import { action } from 'typesafe-actions';

import {
  UploadCatImageActionTypes,
  UploadCatImageApiResponse,
  fetchUploadCatImageProp
} from '../../types/UploadCatImage.types';

export const fetchUploadCatImageRequest = (data: fetchUploadCatImageProp) =>
  action(UploadCatImageActionTypes.UPLOAD_CAT_IMAGE_REQUEST, data);

export const fetchUploadCatImageSuccess = (data: UploadCatImageApiResponse) =>
  action(UploadCatImageActionTypes.UPLOAD_CAT_IMAGE_SUCCESS, data);
  
export const fetchUploadCatImageError = (message: object) =>
  action(UploadCatImageActionTypes.UPLOAD_CAT_IMAGE_FAILURE, message);

