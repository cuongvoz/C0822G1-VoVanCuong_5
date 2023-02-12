import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerServiceService} from "../service/customer/customer-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../model/customer-type";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  idZ: number;
  nameZ: string;
  p: number = 1;
  z: number = 5 * this.p;
  customerTypes: CustomerType[];
  formAdd = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(1),
      iDCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl('',[Validators.required])
    }
  );
  formEdit = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      iDCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl()
    }
  );
  isChecked: true;
  compareFN(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  };
  constructor(private customerServiceService: CustomerServiceService) {
    this.customerServiceService.getAllCustomer().subscribe(next => {
      console.log(next);
      this.customers = next;
    })
    this.customerServiceService.getAllCustomerType().subscribe(next => {
      this.customerTypes = next;
    })
  }

  ngOnInit(): void {
    this.customerServiceService.getAllCustomer().subscribe(next => {
      console.log(next);
      this.customers = next;
    })
  }
  checkForUpdate(customer: any) {
    this.formEdit.patchValue(customer);
  }
  checkForDelete(id: number, name: string) {
    this.idZ = id;
    this.nameZ = name;
  }

  addCustomer() {
    this.customerServiceService.addCustomer(this.formAdd.value).subscribe(next => {
        this.formAdd.reset();
        this.formAdd.controls.gender.patchValue(1);
        this.ngOnInit();
      }, error => {
        alert('Thêm mới không thành công');
      }
    )
  }

  deleteCustomer() {
    this.customerServiceService.deleteCustomer(this.idZ).subscribe(
      next => {
        this.ngOnInit();
      }
    );
  }

  updateCustomer() {
    this.customerServiceService.updateCustomer(this.formEdit.value).subscribe(
      next => {
        this.ngOnInit();
        this.formEdit.reset();
      }, error => {
        alert('Chỉnh sửa thất bại');
      }
    )
  }
}
