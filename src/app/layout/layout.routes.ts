import { Routes } from '@angular/router';
import { AuthGuardService as AuthGuard} from '@auth/auth.guard'

import { ReportsComponent } from './../reports/reports.component'
import { SettingsComponent } from './../settings/settings.component';

export const LayoutRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/camera/camera.module').then(
        (m) => m.CameraModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'report',
    component: ReportsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];