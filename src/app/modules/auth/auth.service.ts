import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean{
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn', isLoggedIn)
    return !!isLoggedIn;
  }

  public login(username: string, password: string){
    if (username == 'admin' && password == 'admin'){
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    else{
      return false;
    }
  }

  public logout(){
    localStorage.removeItem('isLoggedIn');
  }
}
