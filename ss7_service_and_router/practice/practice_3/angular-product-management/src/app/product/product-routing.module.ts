import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductUpdateComponent} from '../product-update/product-update.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'list',
    component: ProductListComponent
  }, {
    path: 'create',
    component: ProductCreateComponent
  }, {
    path: 'edit/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'list/:name',
    component: ProductListComponent
  },
  {
    path: 'list/:name/:category',
    component: ProductListComponent
  }
  ,
  {
    path: 'search/:category',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
