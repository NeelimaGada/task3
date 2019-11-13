import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';
import { Router } from '@angular/router';

 
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  result;
  result1: Object;
  result2: Object;
 
  constructor(private s:CustomService,private r:Router) { }
  go() {
    this.r.navigate([''])
  }
  
  ngOnInit() {
    this.s.neelu1().subscribe(resp=>this.result1=resp)
    this.s.neelu2().subscribe(resp=>this.result=resp)
    this.s.neelu6().subscribe(resp=>this.result2=resp)
  }
  

}
