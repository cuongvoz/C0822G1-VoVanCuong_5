import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";
import {ContractService} from "../service/contract/contract.service";
import {Facility} from "../model/facility";
import {Employee} from "../model/employee";
import {Customer} from "../model/customer";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[];
  facilitys: Facility[];
  employees: Employee[];
  customers: Customer[];
  formAdd = new FormGroup({
    id: new FormControl(),
    startDay: new FormControl(),
    endDay: new FormControl(),
    cost: new FormControl(),
    employee: new FormControl(),
    customer: new FormControl(),
    facility: new FormControl(),
  });
  formEdit = new FormGroup({
    id: new FormControl(),
    startDay: new FormControl(),
    endDay: new FormControl(),
    cost: new FormControl(),
    employee: new FormControl(),
    customer: new FormControl(),
    facility: new FormControl(),
  });
  constructor(private contractService: ContractService) {
    this.contractService.getAllContract().subscribe(next => {
      this.contracts = next;
    })
    this.contractService.getAllCustomer().subscribe(next => {
      this.customers = next;
    })
    this.contractService.getAllEmployee().subscribe(next => {
      this.employees = next;
    })
    this.contractService.getAllFacility().subscribe(next => {
      this.facilitys = next;
    })
  }

  ngOnInit(): void {
    this.contractService.getAllContract().subscribe(next => {
      this.contracts = next;
    })
  }
  compareFN(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
  createContract() {
    this.contractService.createContract(this.formAdd.value).subscribe(
      next => {
        this.ngOnInit();
      }
    )
  }

  checkForEdit(x: Contract) {
    this.formEdit.patchValue(x);
  }

  updateContract() {
    this.contractService.updateContract(this.formEdit.value).subscribe(
      next => {
        this.formEdit.reset();
        this.ngOnInit();
      }
    )
  }
}
