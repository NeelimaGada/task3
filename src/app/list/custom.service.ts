import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomService {

  constructor(private ht:HttpClient) { }
  neelu1() {
   return this.ht.get("http://localhost:3000/personal")
  }
  neelu2() {
    return this.ht.get("http://localhost:3000/education")
  }
 
  neelu6() {
    return this.ht.get("http://localhost:3000/address")
  }
}
