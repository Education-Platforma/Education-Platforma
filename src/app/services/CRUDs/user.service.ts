import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any;
  user: any;
  private apiUrl = 'https://edu-api.tohirjon.uz/api/';
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'User/GetAllUsers').pipe(
      map((response) => {
        console.log(response.userName);
        console.log(response.exp);
        console.log(response.country);
        console.log(response.photoPath);
        return response;
      })
    )
  }

  getUserByName(userFronToken: any): Observable<any> {
      this.users = this.getAllUsers();
      this.users.subscribe((res: any[]) => {
        this.user = res.find((user: { userName: any; }) => user.userName === userFronToken.UserName);
      })
      return this.user;
  }


}
