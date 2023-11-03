import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../shared/password-match.directive';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // providers: [MessageService],
})
export class RegisterComponent {
  authSvc = inject(AuthService);
  // messageToastSvc = inject(MessageService);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageToastSvc: MessageService,
  ) {}


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


  showSuccess(){
    this.messageToastSvc.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Register successful',
    });
    this.router.navigate(['login']);
  }// end showSuccess()
  

  showError(){
    this.messageToastSvc.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Error occured',
    });
  }//end showError()

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
      next: () => {
        this.showSuccess();
        this.router.navigate(['login']);
      },
      complete: () => {},
      error: (err) => {
        this.showError();
        console.log(err);
      },
    });

    //console.log(postData);
  } //submitRegisterDetails

  //======================================
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
