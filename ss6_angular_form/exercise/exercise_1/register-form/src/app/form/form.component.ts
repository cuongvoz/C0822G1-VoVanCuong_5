import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  countryList: string[] = ['Việt Nam', 'Mĩ', 'Thái Lan', 'Pháp', 'Hàn'];

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl(true, [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('Lỗi rồi bạn ei');
    } else {
      alert(
        'email ' + this.registerForm.controls.email.value + '\n' +
        'password ' + this.registerForm.controls.password.value + '\n' +
        'gender ' + this.registerForm.controls.gender.value + '\n' +
        'age ' + this.registerForm.controls.age.value + '\n' +
        'country ' + this.registerForm.controls.email.value + '\n' +
        'phone ' + this.registerForm.controls.phone.value + '\n'
      );
    }

  }
}
