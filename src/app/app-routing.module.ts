import { InvoiceComponent } from './invoice/invoice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';
import { OperatorGuard } from './services/operator.guard';
import { AdminGuard } from './services/admin.guard';
import { ROLES } from './services/auth.service';
import { RoleGuard } from './services/role.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { role: ROLES.ADMIN }
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AdminGuard],
    data: { role: ROLES.ADMIN }
  },
  {
    path: 'users/register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
    canActivate: [AdminGuard],
    data: { role: ROLES.ADMIN }
  },
  {
    path: 'operators',
    loadChildren: () => import('./operators/operators.module').then(m => m.OperatorsModule),
    canActivate: [RoleGuard],
    data: { role: ROLES.OPERATOR && ROLES.ADMIN }
  },
  {
    path: 'attendant',
    loadChildren: () => import('./attendant/attendant.module').then(m => m.AttendantModule),
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule),
  },
  {
    path: 'pix',
    loadChildren: () => import('./pix/pix.module').then(m => m.PixModule),
  },
  {
    path: 'payment-config',
    loadChildren: () => import('./payment-config/payment-config.module').then(m => m.PaymentConfigModule),
    canActivate: [RoleGuard],
    data: { role: ROLES.OPERATOR && ROLES.ADMIN }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
