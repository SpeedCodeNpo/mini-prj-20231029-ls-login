import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private messageToastSvc: MessageService) { }

  showSuccess(msg: string){
    this.messageToastSvc.add({
      severity: 'success',
      summary: 'Success',
      detail: msg,
    });
  }// end showSuccess()
  

  showFail(msg: string){
    this.messageToastSvc.add({
      severity: 'error',
      summary: 'Error',
      detail: msg,
    });
  }//end showFail()
  showError(msg: string){
    this.messageToastSvc.add({
      severity: 'error',
      summary: 'Error',
      detail: msg,
    });
  }//end showError()
}
