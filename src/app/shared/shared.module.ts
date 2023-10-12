import { SidebarOperatorComponent } from './../components/sidebar/sidebar-operator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [ 
    HeaderComponent, 
    SidebarComponent,
    SidebarOperatorComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [ HeaderComponent, SidebarComponent, SidebarOperatorComponent ]
})
export class SharedModule { }
