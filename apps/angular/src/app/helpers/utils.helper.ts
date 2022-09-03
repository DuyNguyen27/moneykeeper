import jwt_decode from 'jwt-decode';
import { JwtPayload } from '../models/jwt.model';

export function getToken() {
  // return document.cookie('token') || '';
  return '';
}

export function removeToken() {
  return localStorage.removeItem('token');
}

export function setToken(token: string) {
  return localStorage.setItem('token', token);
}

export function parseToken() {
  const token = getToken();
  if (!token) return null;
  return JSON.parse(atob(token.split('.')[1]));
}

export function jwtDecode(token: string) : JwtPayload {
  return jwt_decode(token);
}
