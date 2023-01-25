import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductComponent } from './components/product/product.component';

const routes:Routes=[
  {path:'',redirectTo:'/products', pathMatch:'full'},
  {path:'products', component:ListProductsComponent},
  {path:'products/form', component:ProductComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
