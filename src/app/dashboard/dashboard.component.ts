import { ROLES } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userRoleAdmin = ROLES.ADMIN;
  userRoleOperator = ROLES.OPERATOR;
  userRoleAttendant = ROLES.ATTENDANT;
}
