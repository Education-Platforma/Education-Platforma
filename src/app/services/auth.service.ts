import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, map } from 'rxjs';
import { ResponseModel } from '../models/response-model';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://edu-api.tohirjon.uz/api/';
  decodedToken: any;
  tokenKey = 'token';
  role: string = '';
  constructor(private http: HttpClient) { }

  decodeToken(): any {
    try {
      this.decodeToken = jwtDecode(localStorage.getItem(this.tokenKey)!)
      return this.decodeToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  isAuthenticated(): any {
    this.decodedToken = this.decodeToken();
    if(this.decodedToken){
      if(this.decodedToken.expireDate > Date.now() * 1000){
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }






}
