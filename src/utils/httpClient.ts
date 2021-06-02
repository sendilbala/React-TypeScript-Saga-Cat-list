import axios, { AxiosInstance } from 'axios';

import { apiKey } from '../constants/apis';

declare interface HttpRequestConfigs {
  baseURL?: string;
  data?: object;
  headers?: object;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
  url?: string;
  params?: object;
  timeout?: number;
}

declare interface AzureAdTokens {
  idToken: string;
  accessToken: string;
}

const defaultRequestConfig: HttpRequestConfigs = {
  baseURL: '',
  headers: {},
  method: 'GET',
  timeout: 30000,
};

/**
 * This function create a HTTP Client instance with base config
 */
export const createHttpClient = (configs: HttpRequestConfigs = {}): AxiosInstance => {
  const axiosConfigs = { ...defaultRequestConfig, ...configs };
  const { data, headers, method } = configs;
  return axios.create({
    ...axiosConfigs,
    data: method === 'POST' || method === 'PATCH' ? data : null,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      ...headers,
    },
    proxy: false,
  });
};

// export const getApiHttpClient = (configs: HttpRequestConfigs, { idToken }: AzureAdTokens) => {
//   return createHttpClient({
//     baseURL: SiteConfig.AppApiBaseUrl,
//     headers: {
//       Authorization: 'Bearer ' + idToken,
//     },
//     ...configs,
//   });
// };

export const getEsriHttpClient = (configs: HttpRequestConfigs) => {
  return createHttpClient({
    ...configs,
  });
};

const getHttpClient = (
  configs: HttpRequestConfigs,
  instanceType?: string,
  tokens?: AzureAdTokens
) => {
 
    return getEsriHttpClient(configs);
  
};

/**
 * This function is used to make requests to HTTP endpoints with passed configs
 *
 */
export const request = async (
  configs: HttpRequestConfigs,
  instanceType?: string,
  tokens?: AzureAdTokens
) => {
  const httpClient = getHttpClient(configs, instanceType, tokens);

  try {
    const data = await httpClient.request(configs);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * function for put calls
 *
 */
export const httpPut = async (url: string, payload: object, token: string) => {
  try {
    const data = await axios.put(url, payload, {
      headers: { Authorization: 'Bearer ' + token },
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * function for post calls
 *
 */
export const httpPost = async (url: string, payload: object ) => {
  try {
    const data = await axios.post(url, payload, {
      headers: { 'x-api-key': '6e19610e-971e-47d2-8484-9f9594f084cd' },
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};


/**
 * function for post calls
 *
 */
export const postFile = async (url: string, payload: object ) => {

  console.log(payload);
  try {
    const data = await axios.post(url, payload, {
      headers: { 
        'x-api-key': '6e19610e-971e-47d2-8484-9f9594f084cd' 
      },
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

