import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  id: number;
  name: string;
  products: Product[] = [];
  formEdit = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
    }
  );
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.products = this.productService.getAll();
  }deleteById() {
    this.productService.deleteById(this.id);
  }

  checkIdForDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  edit(product: Product) {
    this.formEdit.patchValue(product);
  }
  submit() {
    this.productService.updateProduct(this.formEdit.value);
    this.formEdit.reset();
  }

  addSubMit() {
    this.productService.saveProduct(this.formEdit.value);
    this.formEdit.reset();
  }

  reset() {
    this.formEdit.reset();
  }
}
