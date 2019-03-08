import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentuser:any;
  constructor() { } //private http: HttpClient
  public get currentUserValue() {
    return localStorage.getItem('currentUser');
  }

  login(params){
    // console.log(params)
    // return this.http.post<any>(`xxx`, params)
    //       .pipe(map(user => {
    //           // login successful if there's a jwt token in the response
    //           if (user && user.token) {
    //               // store user details and jwt token in local storage to keep user logged in between page refreshes
    //               localStorage.setItem('currentUser', JSON.stringify(user));
    //               // this.currentuser.next(user);
    //           }
    //           return user;
    //       }));
    
    localStorage.setItem('currentUser', JSON.stringify(params));
    return params;
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      // this.currentuser.next(null);
      return true;      
  }
}