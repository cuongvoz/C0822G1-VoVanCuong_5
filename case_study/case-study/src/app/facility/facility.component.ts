import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityService} from "../service/facility/facility.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
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
    name: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    area: new FormControl('',[Validators.required]),
    cost: new FormControl('',[Validators.required]),
    maxPeople: new FormControl('',[Validators.required]),
    standard: new FormControl(),
    description: new FormControl(),
    poolArea: new FormControl(),
    floor: new FormControl(),
    facilityFree: new FormControl(),
    rentType: new FormControl(null,[Validators.required]),
    facilityType: new FormControl(null,[Validators.required]),
  });
  formEdit = new FormGroup({
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    area: new FormControl('',[Validators.required]),
    cost: new FormControl('',[Validators.required]),
    maxPeople: new FormControl('',[Validators.required]),
    standard: new FormControl(),
    description: new FormControl(),
    poolArea: new FormControl(),
    floor: new FormControl(),
    facilityFree: new FormControl(),
    rentType: new FormControl('',[Validators.required]),
    facilityType: new FormControl('',[Validators.required]),
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
    this.nameD = this.formEdit.controls.name.value;
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
  standardError: string;
  checkStandard(standard: string) {
    if (standard == '' || standard == null) {
      if (this.idAdd == 1) {
        this.formAdd.controls.standard.setErrors({'nullStandard': true});
        this.standardError = 'Vui lòng nhập tiêu chuẩn phòng cho Villa'
      } else if (this.idAdd == 2) {
        this.formAdd.controls.standard.setErrors({'nullStandard': true});
        this.standardError = 'Vui lòng nhập tiêu chuẩn phòng cho House'
      }
    }
  }
  descriptionError: string;
  checkDescription(description: string) {
    if (description == '' || description == null) {
      if (this.idAdd == 1) {
        this.formAdd.controls.description.setErrors({'nullDescription': true});
        this.descriptionError = 'Vui lòng nhập mô tả cho Villa'
      } else if (this.idAdd == 2) {
        this.formAdd.controls.description.setErrors({'nullDescription': true});
        this.descriptionError = 'Vui lòng nhập mô tả cho House'
      }
    }
  }
  messagePoolError: string;
  checkPool(pool: string) {
    if (pool == '' || pool == null) {
      if (this.idAdd == 1) {
        this.formAdd.controls.poolArea.setErrors({'nullPoolArea': true});
        this.messagePoolError = 'Vui lòng nhập diện tích hồ bơi cho Villa'
      }
    }
  }
  floorError: string;
  checkFloor(floor: string) {
    if (floor == '' || floor == null) {
      if (this.idAdd == 1) {
        this.formAdd.controls.poolArea.setErrors({'nullFloor': true});
        this.floorError = 'Vui lòng nhập số tầng cho Villa'
      }else if (this.idAdd == 2) {
        this.formAdd.controls.description.setErrors({'nullFloor': true});
        this.floorError = 'Vui lòng nhập số tầng cho House'
      }
    }
  }
  checkFreeFacility(free: string) {
    if (free == '' || free == null) {
      // @ts-ignore
      if (this.idAdd == 3) {
        this.formAdd.controls.facilityFree.setErrors({'nullFreeFacility': true});
      }
    }
  }
}
