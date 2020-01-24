import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormComponentComponent } from './user-form-component/user-form-component.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserFormComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ViewsModule { }
