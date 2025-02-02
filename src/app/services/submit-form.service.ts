import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {

  constructor() { }

  post(info: string) {
    console.log("senfing info: ", info);
  }
}
