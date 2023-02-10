import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";
import {IWord} from "../model/iword";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   iword: IWord = {
     id: 0,
     title: '',
     content: '',
     img: ''
   };
  constructor(private activate:ActivatedRoute,private service:DictionaryService) {
    this.activate.paramMap.subscribe( next => {
      const name = next.get('name');
      if (name != null) {
        this.iword = service.findByName(name);
      }
      const title = next.get('title');
      if (title != null) {
        alert(title)
      }
    })

  }

  ngOnInit(): void {
  }

}
