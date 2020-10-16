import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import {TranslateService, TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  implements OnInit {
  user: string = localStorage.getItem('user');
  navColor: "navbar-light bg-light";
  constructor(private authService:AuthService, public translate: TranslateService) { 
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    console.log(' new Navbar Component')
  }

  logout(){
    this.authService.logout();
  }

}
