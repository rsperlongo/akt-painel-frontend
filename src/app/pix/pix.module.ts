import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixComponent } from './pix.component';
import { PixRoutingModule } from './pix-routing.module';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';



@NgModule({
  declarations: [
    PixComponent
  ],
  imports: [
    CommonModule,
    PixRoutingModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe
  ]
})
export class PixModule { }
