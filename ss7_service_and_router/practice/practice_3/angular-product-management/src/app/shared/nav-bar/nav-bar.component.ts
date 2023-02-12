import { Component, OnInit } from '@angular/core';
import {Toast, ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {element} from 'protractor';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  categorys: Category[];
  constructor(private toastr: ToastrService, private router: Router, private category: CategoryService) {
    this.category.getAll().subscribe(next => {
      this.categorys = next;
    });
  }
  name: string;
  ngOnInit(): void {
  }
  sendName(name, id) {
    // tslint:disable-next-line:radix
    if (name !== null || id !== null) {
      // tslint:disable-next-line:radix
      if (name != null && name !== 'zz' && isNaN(parseInt(id))) {
        this.router.navigate(['/product/list/' + name]);
        // tslint:disable-next-line:radix
      } else if (name != null && name !== 'zz' && !isNaN( parseInt(id))) {
        this.router.navigate(['/product/list/' + name + '/' + id]);
      }
    }
  }

  findCategory(event: any) {
    if (event.value !== 'all') {
      this.router.navigate(['/product/search/' + event.value]);
    } else {
      this.router.navigate(['/product/list/']);
    }
  }
}
