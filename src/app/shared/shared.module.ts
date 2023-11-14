import { SidebarOperatorComponent } from './../components/sidebar/sidebar-operator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
import { SidebarAttendantComponent } from '../components/sidebar/sidebar-attendant.component';
import { HeaderComponent } from '../components/header/header.component';
import { CpfCnpjMaskPipe } from '../operators/cpf-cnpj-mask.pipe';
import { FooterComponent } from '../components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SidebarOperatorComponent,
    SidebarAttendantComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [ HeaderComponent, SidebarComponent, SidebarOperatorComponent, SidebarAttendantComponent, FooterComponent ]
})
export class SharedModule { }
