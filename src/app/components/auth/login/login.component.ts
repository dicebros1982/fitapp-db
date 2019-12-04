import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.inputForm = new FormGroup({
      email: new FormControl('', { validators: [Validators.required, Validators.email] }),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.inputForm.value);
  }
}
