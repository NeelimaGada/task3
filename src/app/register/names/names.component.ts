import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  reactive: any;

  constructor(private fb:FormBuilder,private s:DataService,private r:Router) { }
  onSubmit() {
    this.s.neelu1(this.reactive.value).subscribe(resp=>console.log(resp))
    
  }
  go() {
    this.r.navigate(['list'])
  }
  ngOnInit() {
    this.reactive=this.fb.group({
      firstname:[''],
      lastname:[''],
      fathername:[''],
      
    })
    
  }

}
