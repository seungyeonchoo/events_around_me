import instance from './http';

interface Api {
  url: string;
  // eslint-disable-next-line no-unused-vars
  get: (params?: object) => Promise<any>;
  // eslint-disable-next-line no-unused-vars
  post: (input: any) => void;
  delete: () => void;
  // eslint-disable-next-line no-unused-vars
  patch: (input: any) => void;
}

class ApiService implements Api {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  // eslint-disable-next-line no-unused-vars
  get: (params?: object | undefined) => Promise<any> = async (params?) => {
    const { data } = await instance.get(this.url, { params: params });
    return data;
  };

  // eslint-disable-next-line no-unused-vars
  post: (input: any) => void = async input => {
    await instance.post(this.url, input);
  };

  // eslint-disable-next-line no-unused-vars
  patch: (input: any) => void = async input => {
    await instance.patch(this.url, input);
  };

  delete: () => void = async () => {
    await instance.delete(this.url);
  };
}

export default ApiService;
