import { jwtDecode } from 'jwt-decode';
export const getUserName = (cookie: { accessToken?: any }) => {
  const userName = jwtDecode(cookie.accessToken);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return userName.username;
};
