import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarRoutingModule } from './sidebar-routing.module';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    DashboardRoutingModule
  ]
})
export class SidebarModule { }
