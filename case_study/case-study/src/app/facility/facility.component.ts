import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
    idD: number = 0;
    nameD: string = '';
  facility: Facility = {
     id :0,
     name: '',
     roomSize: 0,
     image: ''

   };
  facilityList: Facility[] = [
    {
      id: 1,
      name: 'Ô sờ kê',
      roomSize: 85.2,
      image: 'https://motortrip.vn/wp-content/uploads/2022/03/khach-san-17.jpg'
    },
    {
      id: 2,
      name: 'Boscolo Exedra',
      roomSize: 13.2,
      image: 'https://vcdn1-dulich.vnecdn.net/2022/07/29/hypat-1659069584-1659081355.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=ateHKAAnu32uybgAOx-emA'
    },
    {
      id: 3,
      name: 'OrchidHeaven',
      roomSize: 20.2,
      image: 'https://pix10.agoda.net/hotelImages/2817185/-1/4406a970306a452300f94532410dab2c.jpg?ca=10&ce=1&s=1024x768'
    },
    {
      id: 4,
      name: 'Hotel Areias do Seixo',
      roomSize: 49.2,
      image: 'https://hoanghaihotel.vn/Data/images/tintuc/10032021170917-gioi-thieu-ve-khach-san-hoang-hai.jpg'
    },
    {
      id: 5,
      name: 'Motel Magic',
      roomSize: 111.2,
      image: 'https://hanoihotel.com.vn/wp-content/uploads/sites/97/2020/04/hanoi-hotel17942.jpg'
    },
    {
      id: 6,
      name: 'Hotel Villa Honegg',
      roomSize: 59.2,
      image: 'https://i.ex-cdn.com/nhadautu.vn/files/content/2020/05/08/kinh-doanh-khach-san-1-2149.jpg'
    },
    {
      id: 7,
      name: 'Lover’s Deep Luxury',
      roomSize: 22.2,
      image: 'https://vcdn1-dulich.vnecdn.net/2021/05/14/stunning-sunset-at-the-1620959674-1620963331.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=RAP72v1BULO6wM4YrQx1sg'
    },
    {
      id: 8,
      name: 'Trinity Energy',
      roomSize: 111.2,
      image: 'https://mixhotel.vn/uploads/images/62abe8ead6a5eb614f4bdc08/khach-san-tinh-yeu-trung-son__6_.webp'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  create(namez: string, roomSizez: string, imagez: string) {
    let idz = this.facilityList[this.facilityList.length-1].id +1;
  let facility = {
     id: idz,
     name: namez,
     roomSize: roomSizez,
     image: imagez
   }
   // @ts-ignore
    this.facilityList.push(facility)
  }

  update(target: Facility) {
   this.facility = target;
   this.idD = target.id;
   this.nameD = target.name;
  }
  edit(idz: string, namez: string, roomSizez: string, imagez: string) {
    let facility = {
      id: parseInt(idz),
      name: namez,
      roomSize: parseInt(roomSizez),
      image: imagez
    }
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id == parseInt(idz)) {
        this.facilityList.splice(i,1,facility)
      }
    }
  }

  deleteById(idD: number) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id == idD) {
        this.facilityList.splice(i,1)
      }
    }
  }
}
