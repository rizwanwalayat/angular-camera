import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  getCameraImages() {
    return Observable.create( observer => {
      setInterval(()=> {
        observer.next(this.generateRandomImageResponse())}, 
        500);
    });}

  generateRandomImageResponse(){
    let cameras = []
    //let randomNumber = Math.floor(Math.random() * 3) + 1; //return number from 1 to 3
    let cameraCount = 10;//Math.floor(Math.random() * 50) + 25; //return number from 25 to 75

    for(let i = 1; i<= cameraCount; i++){
      cameras.push({
        cameraName: `Camera-${i}`,
        isPassed: Math.floor(Math.random() * 2) ? true : false, //return true if 1 else false 
        imagePath: `assets/camera-images/image-${Math.floor(Math.random() * 24) + 1}.jpg`
      })
    }

    return {
      cameraCount,
      cameras
    }
  }
}
