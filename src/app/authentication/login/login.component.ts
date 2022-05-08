import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  addform: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  //validation email.
  validateEmail(email: string) {
    const regularExpression = /^\w+@\w+\.\w{2,3}$/;
    return regularExpression.test(email);
  }
  //validate Phone
  validatePhone(phone: string) {
    const regular = /[0-9]{11}/;
    return regular.test(String(phone));
  }
    //init sign in form and validate.
  initloginForm() {
    const emailRegex = new RegExp(/^(?:\d{10}|\w+@\w+\.\w{2,3})$/);
    this.addform = this.fb.group({
      emailorphone: [
        null,
        [Validators.required, Validators.pattern(emailRegex)],
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],

    });
  }
}
