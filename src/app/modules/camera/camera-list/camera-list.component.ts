import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.scss']
})
export class CameraListComponent implements OnInit {

  cameras = [];
  constructor(private cameraService: CameraService) { }

  ngOnInit(): void {
    
    this.cameraService.getCameraImages().subscribe(camerasList => {
      let {cameras} = camerasList
      this.cameras = cameras;
    });
  }

}
