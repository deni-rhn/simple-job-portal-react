import { GoogleAccountResponse } from "../interfaces/GoogleAccountResponse";

export const GetUserData = (): GoogleAccountResponse => {
  const stringData = localStorage.getItem('googleAccount');

  return JSON.parse(String(stringData));
}