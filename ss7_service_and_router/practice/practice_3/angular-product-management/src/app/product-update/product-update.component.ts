import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {CategoryService} from '../service/category.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  // @ts-ignore
  product: Product = {};
  productForm: FormGroup = new FormGroup({
    id:  new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  categoryList: Category[];
  // tslint:disable-next-line:max-line-length
  constructor(private activate: ActivatedRoute, private service: ProductService, private categoryService: CategoryService, private router: Router
  ,           private toastr: ToastrService) {
    this.activate.paramMap.subscribe( next => {
      const id = next.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix no-shadowed-variable
        service.findById(parseInt(id)).subscribe( next => {
          this.product = next;
          this.productForm.patchValue(this.product);
      });
      }
    });
    this.categoryService.getAll().subscribe( next => {
      this.categoryList = next;
    });
  }

  ngOnInit(): void {
  }
  compareFn(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
  submit() {
    this.service.updateProduct(this.productForm.value).subscribe( next => {
      this.productForm.reset();
      this.router.navigateByUrl('');
      this.toastr.success('Hello world!', 'Toastr fun!');
      }, error => {
      alert('Chỉnh sửa không thành công');
      }
    );
  }

}
