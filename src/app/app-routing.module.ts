import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SaleTerminalComponent } from './pos/sale-terminal/sale-terminal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/authentication/login',
  },
  {
    path: 'authentication',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        // canActivate: [SingleSignOnGuard, IsSignedInGuard],
      },
    ],
  },
  {
    path: 'pos',
    loadChildren: () =>
      import(`../app/pos/pos.module`).then((a) => a.PosModule),
    // canActivate: [AuthGuard, AccessGuard],
  },
  {
    path: 'saleTerminal',
    component: SaleTerminalComponent,
  },

  { path: '**', redirectTo: 'NotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
