import { UsersComponent } from './../users/users.component';
import { User } from '../models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Input() user = User;
}
