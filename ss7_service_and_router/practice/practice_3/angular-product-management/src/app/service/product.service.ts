import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {element} from 'protractor';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/product');
  }
  saveProduct(product: any) {
    return this.httpClient.post('http://localhost:3000/product/', product);
  }

  updateProduct(product) {
    return this.httpClient.put('http://localhost:3000/product/' + product.id, product);
  }
  deleteById(id: number) {
    return this.httpClient.delete('http://localhost:3000/product/' + id);
  }
  // @ts-ignore
  findById(id: number): Observable<Product> {
    return this.httpClient.get('http://localhost:3000/product/' + id);
  }
}
