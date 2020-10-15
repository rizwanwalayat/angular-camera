import { Routes } from '@angular/router';
import { AuthGuardService as AuthGuard} from '@auth/auth.guard'
export const LayoutRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/camera/camera.module').then(
        (m) => m.CameraModule,
      ),
    canActivate: [AuthGuard],
  }
];