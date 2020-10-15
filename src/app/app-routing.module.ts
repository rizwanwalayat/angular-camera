import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './modules/auth/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [

  // { path: '',   redirectTo: '/auth/login', pathMatch: 'full' },
  // { path: '',   redirectTo: '/camera', pathMatch: 'full' , canActivate: [AuthGuard]}
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
