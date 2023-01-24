import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { BuyComponent } from './components/buy/buy.component';
import { FormProductComponent } from './product/form-product/form-product.component';
import { from } from 'rxjs';

const routes:Routes=[
  {path:'',redirectTo:'/products', pathMatch:'full'},
  {path:'products/list', component:ListProductsComponent},
  {path:'products', component:ProductComponent},
  {path:'products/form', component:FormProductComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ListProductsComponent,
    BuyComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    //AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
