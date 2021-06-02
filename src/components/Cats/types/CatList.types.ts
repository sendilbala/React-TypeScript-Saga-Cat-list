import {
  fetchCatListRequest,
  favouriteCatRequest
} from '../organisms/CatListContainer/CatListContainer.actions';

export type CatListApiResponse = Record<string, any>;

export enum CatListActionTypes {
  CAT_LIST_REQUEST = '@@CATLIST/CAT_LIST/CAT_LIST_REQUEST',
  CAT_LIST_SUCCESS = '@@COVIMS/CAT_LIST/CAT_LIST_SUCCESS',
  CAT_LIST_FAILURE = '@@COVIMS/CAT_LIST/CAT_LIST_FAILURE',
  CAT_FAVOURITE_REQUEST = '@@CATLIST/CAT_LIST/CAT_FAVOURITE_REQUEST',
  CAT_REMOE_FAVOURITE_REQUEST = '@@COVIMS/CAT_LIST/CAT_REMOE_FAVOURITE_REQUEST',
  CAT_VOTE_REQUEST = '@@CATLIST/CAT_LIST/CAT_VOTE_REQUEST',
  CAT_REMOE_REMOVE_REQUEST = '@@COVIMS/CAT_LIST/CAT_REMOE_REMOVE_REQUEST',
}

export interface CatListState {
  readonly isRequest: boolean;
  readonly listData: CatListApiResponse[];
  readonly error?: object;
}

export interface PropsFromState {
  isRequest: boolean;
  listData: CatListApiResponse[];
  error?: object;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
export interface PropsFromDispatch {
  dispatchGetCatList: typeof fetchCatListRequest;
  favouriteCatRequest: typeof favouriteCatRequest;
}

export type CatListProps = PropsFromState & PropsFromDispatch;
