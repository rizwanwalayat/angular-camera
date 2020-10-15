import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { CameraModule } from './modules/camera/camera.module';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    CameraModule,
    // ReactiveFormsModule,
    // FormsControl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
