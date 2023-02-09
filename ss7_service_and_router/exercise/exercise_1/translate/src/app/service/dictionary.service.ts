import { Injectable } from '@angular/core';
import {IWord} from "../model/iword";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
   words: IWord[] = [
     {id: 1,
     title: 'dog',
     content: 'Chó, là một loài động vật thuộc chi Chó, tạo nên một phần tiến hóa của sói, đồng thời là loài động vật ăn thịt trên cạn có số lượng lớn nhất',
     img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Yen_Bai_-_dogs_-_P1390010.JPG'},
     {id: 2,
       title: 'cat',
       content: 'Mèo (chính xác hơn là loài mèo nhà để phân biệt với các loài trong họ Mèo khác) là động vật có vú, nhỏ nhắn và chuyên ăn thịt, sống chung với loài người',
     img: 'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg'},
     {id: 3,
       title: 'fish',
       content: 'Cá là những động vật có dây sống, phần lớn là ngoại nhiệt (máu lạnh), có mang (một số loài có phổi) và sống dưới nước. Hiện người ta biết khoảng trên 31.900 ...',
     img: 'https://nld.mediacdn.vn/291774122806476800/2021/7/20/1-16267510069271125380892.jpg'},
     {id: 4,
       title: 'bird',
       content: 'Chim (danh pháp khoa học: Aves) là tập hợp các loài động vật có xương sống, máu nóng, đi đứng bằng hai chân, có mỏ, đẻ trứng, có cánh, có lông vũ và biế',
     img: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2020/9/15/836184/7-Loai-Chim-Ki-La-Nh-11.jpg?w=800&crop=auto&scale=both'},
     {id: 5,
       title: 'tiger',
       content: 'Hổ hay còn gọi là cọp hoặc hùm (và các tên gọi khác như Ông ba mươi, kễnh, khái) là một loài động vật có vú thuộc họ Mèo được xếp vào một trong năm loài ...',
      img: 'https://danviet.mediacdn.vn/zoom/700_438/296231569849192448/2022/1/31/diem-danh-nhung-loai-ho-quy-hiem-nhat-the-gian-toan-loai-nguy-cap-hinh-9-1643612880980-1643612881190969539087-52-0-427-600-crop-16436131041061438491676.png'},

     {id: 6,
       title: 'mouse',
       content: 'Chuột máy tính (tiếng Anh: computer mouse) là một thiết bị ngoại vi của máy tính dùng để điều khiển và làm việc với máy tính. A computer mouse with the most ...',
      img: 'https://fptshop.com.vn/Uploads/Originals/2021/9/24/637680748071955405_2.u5552.d20171010.t171948.436934.jpg'}
   ];
  constructor() { }

  getAll() {
    return this.words;
  }
  findById(id: number) {
    let result = this.words.filter( element => element.id == id);
    return result[0];
  }
  findByName(title: string) {
    let result = this.words.filter( element => element.title == title);
    return result[0];
  }
}
