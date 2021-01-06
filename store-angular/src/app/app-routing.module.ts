import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
{
  path: '/home',
  component: HomeComponent},

  
  {path: '/products',
  component: ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
