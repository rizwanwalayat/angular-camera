import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isAuthenticated(): boolean{
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn', isLoggedIn)
    return !!isLoggedIn;
  }

  public login(username: string, password: string){
    if (username == 'admin' && password == 'admin'){
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', username);
      return true;
    }
    else{
      return false;
    }
  }

  public logout(){
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['auth/login']);
  }
}
