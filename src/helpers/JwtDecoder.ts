import jwt_decode from 'jwt-decode';
import { GoogleAccountResponse } from '../interfaces/GoogleAccountResponse';

export const DecodeGoogleCredentials = (data: string): GoogleAccountResponse => jwt_decode(data);