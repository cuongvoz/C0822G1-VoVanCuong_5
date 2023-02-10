import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductUpdateComponent} from '../product-update/product-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class ProductModule { }
