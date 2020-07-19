import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:"products", component:ProductlistComponent},
  {path:"",component:HomeComponent},
  { path:"add",component:NewproductComponent},
  { path:"signup",component:RegisterComponent},
  { path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
