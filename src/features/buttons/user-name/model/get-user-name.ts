import { jwtDecode } from 'jwt-decode';
interface MyToken {
  username: string;
}
export const getUserName = (cookie: { accessToken?: any }) => {
  const userName = jwtDecode<MyToken>(cookie.accessToken);
  return userName.username;
};
