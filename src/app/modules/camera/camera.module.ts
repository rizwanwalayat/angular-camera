import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraRoutingModule } from './camera-routing.module';
import { CameraComponent } from './camera/camera.component';
import { CameraListComponent } from './camera-list/camera-list.component';
import { SharedModule } from '@shared/shared.module';




@NgModule({
  declarations: [CameraComponent, CameraListComponent],
  imports: [
    CommonModule, 
    CameraRoutingModule,
    SharedModule
  ],
  exports: [CameraListComponent]
})
export class CameraModule { }
