import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {log} from 'util';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  id: number;
  name: string;
  p = 1;
  categorys: Category[] = [];
  category: Category = {};
  products: Product[] = [];
  formEdit = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
    }
  );
  constructor(private productService: ProductService, private categoryService: CategoryService) {
    // this.productService.getAll().subscribe( next => {
    //   this.products = next;
    // }, error => {
    //   alert('Lỗi');
    //   },
    //   () => {});
    this.categoryService.getAll().subscribe(next => {
      this.categorys = next;
      },
      error => {
      console.log('Không lấy được danh sách danh mục');
      });
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe( next => {
        this.products = next;
      }, error => {
        alert('Lỗi');
      },
      () => {});
  }
  // getAll() {
  //   this.products = this.productService.getAll();
  // }

  deleteById() {
    this.productService.deleteById(this.id).subscribe(next => {
      this.ngOnInit();
      },
      error => {
      alert('Lỗi ko xóa đc');
      });
  }

  checkIdForDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  compareFn(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

  edit(product: Product) {
    this.formEdit.patchValue(product);
    this.category = product.category;
  }
  submit() {
    const temp = this.productService.updateProduct(this.formEdit.value).subscribe( next => {
      this.ngOnInit();
    }, error => {
      alert('thêm mới ko thành công');
    });
    this.formEdit.reset();
  }

  addSubMit() {
    console.log(this.formEdit.value);
    const product = this.formEdit.value;
    this.productService.saveProduct(this.formEdit.value).subscribe(next => {
      this.ngOnInit();
    }, error => {
      alert('thêm mới thành công');
    });
    this.formEdit.reset();
  }

  reset() {
    this.formEdit.reset();
  }
}
