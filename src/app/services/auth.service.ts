import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl= 'http://localhost:3000';
  constructor(private http: HttpClient, private messageToastSvc: MessageService,) { }

  registerUser(userDetails: UserInterface){
    return this.http.post(this.baseUrl+ '/users', userDetails);
  }

  getUserByEmail(targetEmail: string): Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(`${this.baseUrl}/users?email=${targetEmail}`);
  }
}
