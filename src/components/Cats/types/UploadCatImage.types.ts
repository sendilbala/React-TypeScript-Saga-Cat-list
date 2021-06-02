import {
  fetchUploadCatImageRequest,
} from '../organisms/UploadCatImageContainer/UploadCatImageContainer.actions';

export type UploadCatImageApiResponse = Record<string, any> ;

export enum UploadCatImageActionTypes {
  UPLOAD_CAT_IMAGE_REQUEST = '@@CATLIST/UPLOAD_CAT_IMAGE/UPLOAD_CAT_IMAGE_REQUEST',
  UPLOAD_CAT_IMAGE_SUCCESS = '@@CATLIST/UPLOAD_CAT_IMAGE/UPLOAD_CAT_IMAGE_SUCCESS',
  UPLOAD_CAT_IMAGE_FAILURE = '@@CATLIST/UPLOAD_CAT_IMAGE/UPLOAD_CAT_IMAGE_FAILURE',
  
}
export interface UploadCatImageState {
  readonly isRequest: boolean;
  readonly data: UploadCatImageApiResponse[];
  readonly error?: object;
}

export interface UploadPropsFromState {
  isRequest: boolean;
  data: UploadCatImageApiResponse[];
  error?: object;
}

export interface fetchUploadCatImageProp {
  file: string;
  subId: string;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
export interface UploadPropsFromDispatch {
  dispatchUploadCatImage: typeof fetchUploadCatImageRequest;
}

export type UploadCatImageProps = UploadPropsFromState & UploadPropsFromDispatch;
