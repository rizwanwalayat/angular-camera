import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {TranslateModule, TranslateService, TranslatePipe} from '@ngx-translate/core';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [NavbarComponent, TranslateModule]
})
export class SharedModule {
  constructor(public translate: TranslateService){
    translate.setDefaultLang('en');
    translate.use('en');
  }
 }
