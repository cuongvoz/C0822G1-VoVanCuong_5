import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  router: Router;
  product: Product = {
    id: 1,
    name: '',
    price: 0,
    description: ''
  };
  productForm: FormGroup = new FormGroup({
    id:  new FormControl(),
    name: new FormControl(this.product.name),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private activate: ActivatedRoute, private service: ProductService) {
    this.activate.paramMap.subscribe( next => {
      const id = next.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        this.product = service.findById(parseInt(id));
        this.productForm.patchValue(this.product);
      }
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.service.updateProduct(this.productForm.value);
    this.productForm.reset();
  }
  gotoHome() {
    this.router.navigateByUrl('');
  }
}
