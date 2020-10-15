import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import {TranslateService, TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: string = localStorage.getItem('user');
  constructor(private authService:AuthService, public translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    console.log('Navbar Component')
  }

  logout(){
    this.authService.logout();
  }

}
