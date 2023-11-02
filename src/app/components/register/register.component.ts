import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../interfaces/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  authSvc = inject(AuthService);
  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group(
    {
      fullNameCtrl: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)],
      ],
      emailCtrl: ['', [Validators.required, Validators.email]],
      passwordCtrl: ['', [Validators.required]],
      confirmPasswordCtrl: ['', [Validators.required]],
    },
    {
      validators: passwordMatchValidator,
    }
  );

  submitRegisterDetails() {
    console.log(this.registerForm.value);
    // We use a use a destructuring assignment to get the values of the user properties from the form.
    const { fullNameCtrl, emailCtrl, passwordCtrl } = this.registerForm.value;

    const postData: UserInterface = {
      id: '',
      fullName: fullNameCtrl,
      email: emailCtrl,
      password: passwordCtrl,
    };

    this.authSvc.registerUser(postData).subscribe({
      next: (value) => {
        console.log(value);
      },
      complete: () => {},
      error: (err) => console.log(err),
    });
    console.log(postData);
  }

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
