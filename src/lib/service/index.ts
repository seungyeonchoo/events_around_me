import instance from './http';

const BASE_URL = 'http://localhost:3000';

interface Api {
  // eslint-disable-next-line no-unused-vars
  get: (url: string, params?: object) => Promise<any>;
  // eslint-disable-next-line no-unused-vars
  post: (url: string, input: any) => Promise<any>;
  // eslint-disable-next-line no-unused-vars
  delete: (url: string) => any;
  // eslint-disable-next-line no-unused-vars
  patch: (url: string, input: any) => any;
}

class ApiService implements Api {
  // eslint-disable-next-line no-unused-vars
  get: (url: string, params?: object | undefined) => Promise<any> = async (url, params?) => {
    const { data } = await instance.get(url, { params: params });
    return data;
  };

  // eslint-disable-next-line no-unused-vars
  post: (url: string, input: any) => Promise<any> = async (url, input) => {
    return await instance.post(url, input);
  };

  // eslint-disable-next-line no-unused-vars
  patch: (url: string, input: any) => any = async (url, input) => {
    await instance.patch(url, input);
  };

  // eslint-disable-next-line no-unused-vars
  delete: (url: string) => any = async url => {
    await instance.delete(url);
  };
}

export default ApiService;

export const getFetchedData = async (url: string, params?: { [key: string]: string }) => {
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}${url}?${qs}`);

  console.log(qs);

  return res.json();
};
