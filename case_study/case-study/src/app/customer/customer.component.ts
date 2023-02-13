import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerServiceService} from "../service/customer/customer-service.service";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
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
  formAdd: FormGroup;
  formEdit = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl(1, [Validators.required]),
      iDCard: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      address: new FormControl('', [Validators.required]),
      customerType: new FormControl('', [Validators.required])
    }
  );

  isChecked: true;

  compareFN(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  };

  constructor(private customerServiceService: CustomerServiceService) {
    this.customerServiceService.getAllCustomer().subscribe(next => {
      this.customers = next;
    })


  }

  async ngOnInit(): Promise<void> {
    await this.customerServiceService.getAllCustomer().subscribe(next => {
      this.customers = next;
      debugger
    })

    this.customerServiceService.getAllCustomerType().subscribe(next => {
      this.customerTypes = next;
    })

    this.formAdd = new FormGroup({
        id: new FormControl(),
        name: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required]),
        gender: new FormControl(1, [Validators.required]),
        iDCard: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        address: new FormControl('', [Validators.required]),
        customerType: new FormControl('', [Validators.required])
      }
    );
  }

  async loadData() {
    await this.customerServiceService.getAllCustomer().subscribe(next => {
      this.customers = next;
    })
  }
 // errorEmail: string;
  checkEmail(email: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].email == email) {
        this.formAdd.controls.email.setErrors({'emailUnique': true})
        break;
      }
    }
  }
  checkPhoneNumber(phone: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].phoneNumber == phone) {
        this.formAdd.controls.phoneNumber.setErrors({'phoneNumberUnique': true})
        break;
      }
    }
  }
  checkIDCard(iDCard: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].iDCard == iDCard) {
        this.formAdd.controls.iDCard.setErrors({'idCardUnique': true})
        break;
      }
    }
  }
  checkEmail2(email: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == this.formEdit.controls.id.value) {
        continue;
      }
      if (this.customers[i].email == email) {
        this.formEdit.controls.email.setErrors({'emailUnique': true})
        break;
      }
    }
  }
  checkPhoneNumber2(phone: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == this.formEdit.controls.id.value) {
        continue;
      }
      if (this.customers[i].phoneNumber == phone) {
        this.formEdit.controls.phoneNumber.setErrors({'phoneNumberUnique': true})
        break;
      }
    }
  }
  checkIDCard2(iDCard: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id == this.formEdit.controls.id.value) {
        continue;
      }
      if (this.customers[i].iDCard == iDCard) {
        this.formEdit.controls.iDCard.setErrors({'idCardUnique': true})
        break;
      }
    }
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
