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
  username = new FormControl('');
  password = new FormControl('');
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  login(){
    let loggedIn = this.authService.login('admin', 'admin');

    if(loggedIn){
      console.log('Inside Login , redirecting to camera')
      this.router.navigate['']
    }
  }

}
