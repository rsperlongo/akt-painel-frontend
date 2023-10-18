import { PaymentConfigComponent } from './payment-config/payment-config.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';
import { ROLES } from './services/auth.service';
import { RoleGuard } from './services/role.guard';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { OperatorsComponent } from './operators/operators.component';
import { AttendantComponent } from './attendant/attendant.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [RoleGuard ],
    data: { role: ROLES.ADMIN }
  },
  {
    path: 'users/register',
    component: RegisterComponent,
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
    canActivate: [RoleGuard],
    data: { role: ROLES.ADMIN }
  },
  {
    path: 'operators',
    component: OperatorsComponent,
    loadChildren: () => import('./operators/operators.module').then(m => m.OperatorsModule),
    canActivate: [RoleGuard],
    data: { role: ROLES.OPERATOR  }
  },
  {
    path: 'attendant',
    component: AttendantComponent,
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
    component: PaymentConfigComponent,
    loadChildren: () => import('./payment-config/payment-config.module').then(m => m.PaymentConfigModule),
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./notauthorized/notauthorized.module').then(m => m.NotauthorizedModule),
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
