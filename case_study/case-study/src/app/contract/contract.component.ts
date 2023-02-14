import { Component, OnInit } from '@angular/core';
import {Contract} from "../model/contract";
import {ContractService} from "../service/contract/contract.service";
import {Facility} from "../model/facility";
import {Employee} from "../model/employee";
import {Customer} from "../model/customer";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

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
    startDay: new FormControl('',[Validators.required,this.todayValid]),
    endDay: new FormControl('',[Validators.required]),
    cost: new FormControl('',[Validators.required]),
    employee: new FormControl(null,[Validators.required]),
    customer: new FormControl(null,[Validators.required]),
    facility: new FormControl(null,[Validators.required]),
  });
  formEdit = new FormGroup({
    id: new FormControl(),
    startDay: new FormControl('',[Validators.required]),
    endDay: new FormControl('',[Validators.required]),
    cost: new FormControl('',[Validators.required]),
    employee: new FormControl(null,[Validators.required]),
    customer: new FormControl(null,[Validators.required]),
    facility: new FormControl(null,[Validators.required])
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
  todayValid(today: AbstractControl) {
    return (new Date(today.value) <= new Date(Date.now())) ? {'todayValid': true} : null;
  }
  endDayValid(end: string) {
    let start = this.formAdd.controls.startDay.value;
    // @ts-ignore
    if (new Date(start) >= new Date(end)) {
      this.formAdd.controls.endDay.setErrors({'endInvalid':true})
    }
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

  todayValid2(today: string) {
    // @ts-ignore
    if (new Date(today) <= Date.now()) {
      this.formEdit.controls.startDay.setErrors({'todayValid': true});
    }
  }
  endValid2(end: string) {
    // @ts-ignore
    if (new Date(end) <= new Date(this.formEdit.controls.startDay.value)) {
      this.formEdit.controls.endDay.setErrors({'endValid': true});
    }
  }
}
