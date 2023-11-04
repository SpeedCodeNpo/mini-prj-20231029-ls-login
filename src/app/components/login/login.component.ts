import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  autSvc = inject(AuthService);
  utilSvc = inject(UtilsService);

  constructor(private fb: FormBuilder, private router: Router){}

  loginForm = this.fb.group({
    emailCtrl: ['', [Validators.required, Validators.email]],
    passwordCtrl: ['', [Validators.required]],
  })

  loginUser(){
    console.log('Inside loginUser');

    const {emailCtrl, passwordCtrl} = this.loginForm.value;
    const email: string = emailCtrl as string;
    this.autSvc.getUserByEmail(email).subscribe({ 
      next: (value)=> {
        console.log(value);
        if (value.length > 0 && value[0].password === passwordCtrl) {
          this.utilSvc.showSuccess('Login succesful');
          sessionStorage.setItem('emailStorage', email);
          this.router.navigate(['/home']);
        }
         else {
          this.utilSvc.showFail('Wrong credentials');
          console.log('email or password not found');
        }
      },
      complete: () => {},
      error: (err) => {
        this.utilSvc.showError('Something went wrong');
        console.log('Error, something went wrong');
        console.log(err);
      }
    });
  }

}
