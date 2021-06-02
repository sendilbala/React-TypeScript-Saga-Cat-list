import { action } from 'typesafe-actions';

import {
  CatListActionTypes,
  CatListApiResponse,
} from '../../types/CatList.types';

export const fetchCatListRequest = () =>
  action(CatListActionTypes.CAT_LIST_REQUEST);

export const fetchCatListSuccess = (data: CatListApiResponse[]) =>
  action(CatListActionTypes.CAT_LIST_SUCCESS, data);

export const fetchCatListError = (message: object) =>
  action(CatListActionTypes.CAT_LIST_FAILURE, message);

export const favouriteCatRequest = (id:string) =>
  action(CatListActionTypes.CAT_FAVOURITE_REQUEST, id);

export const removeFavouriteCatRequest = (id: string) =>
  action(CatListActionTypes.CAT_REMOE_FAVOURITE_REQUEST, id);

export const voteCatRequest = (id:string) =>
  action(CatListActionTypes.CAT_VOTE_REQUEST, id);

export const removeVoteCatRequest = (id: string) =>
  action(CatListActionTypes.CAT_REMOE_REMOVE_REQUEST, id);


