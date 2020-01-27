import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDescriptionComponent } from './views/product-description/product-description.component';


const routes: Routes = [
  {path:'',redirectTo:'productList', pathMatch:'full'},
  {path: 'productList', component: ProductListComponent},
  {path:':productName/:id',component:ProductDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
