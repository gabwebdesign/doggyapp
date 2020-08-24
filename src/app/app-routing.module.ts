import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedGuard } from './core/guards/logged.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedGuard],
    loadChildren: (): Promise<any> =>
      import('./modules/authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    canLoad: [AuthGuard],
    loadChildren: (): Promise<any> =>
      import('./modules/dashboard/dashboard.module').then(
        (module) => module.DashboardModule
      ),
  },
  {
    path: 'order-service',
    canLoad: [AuthGuard],
    loadChildren: (): Promise<any> =>
      import('./modules/order-service/order-service.module').then(
        (module) => module.OrderServiceModule
      ),
  },
  {
    path: 'users',
    canLoad: [AuthGuard],
    loadChildren: (): Promise<any> =>
      import('./modules/users/users.module').then(
        (module) => module.UsersModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
