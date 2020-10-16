import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule, TranslateService, TranslatePipe} from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [TranslateModule]
})
export class SharedModule {
  constructor(public translate: TranslateService){
    translate.setDefaultLang('en');
    translate.use('en');
  }
 }
