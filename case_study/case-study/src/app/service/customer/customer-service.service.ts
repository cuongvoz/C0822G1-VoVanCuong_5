import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Customer} from "../../model/customer";
import {HttpClient} from "@angular/common/http";
import {CustomerType} from "../../model/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customers");
  }
  getAllCustomerType():Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>("http://localhost:3000/customerTypes")
  }
  addCustomer(customer: any):Observable<Customer> {
    return this.httpClient.post<Customer>("http://localhost:3000/customers",customer)
  }
  deleteCustomer(id: number):Observable<Customer> {
    return this.httpClient.delete<Customer>("http://localhost:3000/customers/" + id);
  }
  updateCustomer(customer: any): Observable<Customer> {
    return this.httpClient.put<Customer>("http://localhost:3000/customers/" + customer.id,customer)
  }
}
