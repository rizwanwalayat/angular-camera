import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CameraListComponent } from './camera-list/camera-list.component';


const cameraRoutes: Routes = [
    {
        path: 'camera',
        children: [
            { 
                path: '',  
                component: CameraListComponent 
            }
        ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(cameraRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CameraRoutingModule { }