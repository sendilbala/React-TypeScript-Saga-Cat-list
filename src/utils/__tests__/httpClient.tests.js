import { createHttpClient, request } from '../httpClient';

it('should create a http client with default configs', () => {
  const httpClient = createHttpClient();
  expect(httpClient.defaults.baseURL).toEqual('');
});
