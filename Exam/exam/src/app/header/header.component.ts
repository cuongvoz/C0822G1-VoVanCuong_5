import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {BenhAnService} from "../service/benh-an.service";
import {BenhAn} from "../model/benh-an";
import {Doctor} from "../model/doctor";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nameSearch: string = '';
  constructor(private benhAnService: BenhAnService,private router:Router) { }

  ngOnInit(): void {

  }


  search(name: string) {
    this.nameSearch = name;
    if (this.nameSearch != '') {
      this.router.navigate(['/search/'+ this.nameSearch])
      this.nameSearch = '';
    }

  }
}
