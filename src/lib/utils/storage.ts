export const id =
  typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('user') as string)?.id : null;
export const token = typeof window !== 'undefined' ? sessionStorage.getItem('access_Token') : null;
