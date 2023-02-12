import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    img: new FormControl(),
    category: new FormControl()
  });
  categories: Category[];
  constructor(private productService: ProductService, private categoryService: CategoryService , private router: Router,
              private toast: ToastrService) {
    this.categoryService.getAll().subscribe( next => {
      this.categories = next;
    });
  }

  ngOnInit(): void {
  }
  submit() {
    const product = this.productForm.value;
    const temp = this.productService.saveProduct(this.productForm.value).subscribe( next => {
      this.router.navigateByUrl('product/list');
      this.toast.success('Thêm mới thành công');
    }, error => {
      alert('thêm mới ko thành công');
    });
    this.productForm.reset();
  }
}
