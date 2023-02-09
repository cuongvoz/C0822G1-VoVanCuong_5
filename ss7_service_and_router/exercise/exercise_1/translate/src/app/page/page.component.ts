import { Component, OnInit } from '@angular/core';
import {IWord} from "../model/iword";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  iWords: IWord = {
    id: 1,
    title: '',
    content: '',
    img: ''
  };
  router: Router;
  constructor(private dictionary: DictionaryService,private activate: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  // view(id: number) {
  //   this.router.navigate(['/view',id])
  // }

  dich(name: string) {
    this.router.navigate(['/detail',name])
  }
}
