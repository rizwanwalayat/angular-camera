import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'

import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  error:boolean=false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  login(){
    let loggedIn = this.authService.login(this.username, this.password);

    if(loggedIn){
      console.log('Inside Login , redirecting to camera')
      this.router.navigate(['/camera'])
    }
    else{
      this.error=true;
    }
  }

}
