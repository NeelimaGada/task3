import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht:HttpClient) { }
  neelu1(s) {
    return this.ht.post("  http://localhost:3000/personal",s)

  }
  neelu2(d) {
    return this.ht.post("http://localhost:3000/education",d)
  }
  
  neelu6(p) {
    return this.ht.post("http://localhost:3000/address",p)
  }
}
