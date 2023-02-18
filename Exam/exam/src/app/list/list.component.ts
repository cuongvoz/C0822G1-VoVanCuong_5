import { Component, OnInit } from '@angular/core';
import {BenhAnService} from "../service/benh-an.service";
import {BenhAn} from "../model/benh-an";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Doctor} from "../model/doctor";
import {ActivatedRoute} from "@angular/router";
import {ErrorValidate} from "../model/error-validate";
import {$} from "protractor";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 benhAns: BenhAn[];
 doctors: Doctor[];
 benhAn: BenhAn;
 check: boolean;
 eror: ErrorValidate ={
   patientID: '',
   patientName: ''
 }
 idDelete: string;
  formAdd = new FormGroup({
    id: new FormControl('',[Validators.required,Validators.pattern('BA-\\d{3}')]),
    patientID: new FormControl(''),
    patient: new FormControl(null),
    patientName: new FormControl(''),
    startDay: new FormControl('',[Validators.required]),
    endDay: new FormControl('',[Validators.required]),
    reason: new FormControl('',[Validators.required]),
    method: new FormControl('',[Validators.required]),
    doctor: new FormControl(null,[Validators.required])
  });
 formEdit = new FormGroup({
   id: new FormControl(),
   patientID: new FormControl('',[Validators.required]),
   patient: new FormControl(null,[Validators.required]),
   patientName: new FormControl('',[Validators.required,Validators.pattern('^[\\D]+$')]),
   startDay: new FormControl('',[Validators.required]),
   endDay: new FormControl('',[Validators.required]),
   reason: new FormControl('',[Validators.required]),
   method: new FormControl('',[Validators.required]),
   doctor: new FormControl(null,[Validators.required])
 });
  constructor(private benhAnService: BenhAnService, private activate:ActivatedRoute) {
    this.activate.paramMap.subscribe(next => {

      const name = next.get('name')
      if (name != null && name != '') {
        this.benhAnService.search(name).subscribe(next => {
          this.benhAns = next;
        })
      } else {
        this.getAll();
      }
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  compareFn(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
  checkUpdate(x: BenhAn) {
    this.formEdit.controls.patientID.patchValue(x.patient.id);
    this.formEdit.controls.patientName.patchValue(x.patient.name);
    this.formEdit.patchValue(x);

  }

  update() {

    this.benhAnService.updateBenhAn(this.formEdit.value).subscribe(next => {
      this.formEdit.reset();
      this.getAll();
      console.log(this.formEdit.value)
    })
  }
  create() {
    this.eror.patientName ='';
    this.eror.patientID ='';
    this.benhAnService.createBenhAn(this.formAdd.value).subscribe(next => {
      document.getElementById('hideModal').click()
      this.formAdd.reset();
      this.getAll();

    } ,error => {
      for (let i = 0; i < error.error.length; i++) {
        if( error.error[i].defaultMessage.charAt(0) == 1) {
          this.eror.patientID = error.error[i].defaultMessage.substr(1);
        } else if (error.error[i].defaultMessage.charAt(0) == 2) {
          this.eror.patientName = error.error[i].defaultMessage.substr(1);
        }
      }
    });
  }
  getAll(){
    this.benhAnService.getAll().subscribe(next => {
      this.benhAns = next;
    })
    this.benhAnService.getAllDoctor().subscribe(next => {
      this.doctors = next;
    })
  }
  checkDelete(id: string) {
    this.idDelete = id
  }

  delete() {
    this.benhAnService.deleteBenhAn(this.idDelete).subscribe(next => {
      this.getAll();
    })
  }

  checkEnd(end: string) {
    let start = this.formEdit.controls.startDay.value;
    if (new Date(start) >= new Date(end)) {
      this.formEdit.controls.endDay.setErrors( {'endInvalid': true});
    }
  }

  checkStart(start: string) {
    let end = this.formEdit.controls.endDay.value;
    if (new Date(start) >= new Date(end)) {
      this.formEdit.controls.startDay.setErrors( {'startInvalid': true});
    }
  }
  checkID(id: string) {
    for (let x of this.benhAns) {
      // @ts-ignore
      if(x.id == id) {
        this.formAdd.controls.id.setErrors({"idUnique" : true});
      }
    }
  }

  changePage(number: number) {
    this.benhAnService.changePage(number).subscribe( next => {
      this.benhAns = next;
    })
  }
}
