import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponentComponent } from './views/user-form-component/user-form-component.component';


const routes: Routes = [{ path: '', redirectTo: 'userform', pathMatch: 'full' },
{ path: 'userform', component: UserFormComponentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
