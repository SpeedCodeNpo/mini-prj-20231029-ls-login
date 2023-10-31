import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder){}

  registerForm = this.fb.group({
    fullNameCtrl: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/) ]],
    emailCtrl: ['', [Validators.required, Validators.email]],
    passwordCtrl: ['', [Validators.required]],
    confirmPasswordCtrl: ['', [Validators.required]],
  })

  get getFullName() {
    return this.registerForm.controls['fullNameCtrl'];
  }
  get getEmail() {
    return this.registerForm.controls['emailCtrl'];
  }
  get getPassword() {
    return this.registerForm.controls['passwordCtrl'];
  }
  get getConfirmPassword() {
    return this.registerForm.controls['confirmPasswordCtrl'];
  }
}
