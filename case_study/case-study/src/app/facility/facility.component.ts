import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityService} from "../service/facility/facility.service";
import {FormControl, FormGroup} from "@angular/forms";
import {RentType} from "../model/rent-type";
import {FacilityType} from "../model/facility-type";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
    idAdd: 1;
    idEdit: number;
    nameD: string;
    idZ: string;
  facilityList: Facility[] = [];
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  formAdd = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    image: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    standard: new FormControl(),
    description: new FormControl(),
    poolArea: new FormControl(),
    floor: new FormControl(),
    facilityFree: new FormControl(),
    rentType: new FormControl(),
    facilityType: new FormControl(),
  });
  formEdit = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    image: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    standard: new FormControl(),
    description: new FormControl(),
    poolArea: new FormControl(),
    floor: new FormControl(),
    facilityFree: new FormControl(),
    rentType: new FormControl(),
    facilityType: new FormControl(),
  });
  compareFN(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
  constructor(private facilityService: FacilityService) {
    this.facilityService.getAllFacility().subscribe( next => {
      this.facilityList = next;
    });
    this.facilityService.getAllFacilityType().subscribe( next => {
      this.facilityTypeList = next;
    })
    this.facilityService.getAllRentType().subscribe(next => {
      this.rentTypeList = next;
    })
  }

  ngOnInit(): void {
    this.facilityService.getAllFacility().subscribe( next => {
      this.facilityList = next;
    }, error => {
      alert('lỗi');
    })
  }

  create() {
    this.facilityService.createFacility(this.formAdd.value).subscribe(
      next => {
        this.formAdd.reset();
        alert('Thêm mới thành công');
        this.ngOnInit();
      }, error => {
        alert('Thêm mới không thành công');
      }
    )
  }

  update(event: any) {
    this.formEdit.patchValue(event);
    let facilityType = this.formEdit.controls.facilityType.value;
    this.idEdit = facilityType.id;
    this.idZ = this.formEdit.controls.id.value
    this.nameD = this.formEdit.controls.name.value;;
  }
  edit() {

  }

  deleteById() {
   this.facilityService.deleteFacility(this.idZ).subscribe(next => {
     this.ngOnInit();
   })
  }

  updateFacility() {
    this.facilityService.updateFacility(this.formEdit.value).subscribe(
      next => {
        this.formEdit.reset();
        this.ngOnInit();
      }
    )
  }

  checkValue() {
   let facilityTypez = this.formAdd.controls.facilityType.value;
   this.idAdd = facilityTypez.id;
  }

  changeIDEdit() {
    let facilityTypez = this.formEdit.controls.facilityType.value;
    this.idEdit = facilityTypez.id;
  }
}
