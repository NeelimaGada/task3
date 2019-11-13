import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  reactive: any;
  

  constructor(private fb:FormBuilder,private s:DataService) { }
  submit() {
    this.s.neelu2(this.reactive.value).subscribe(resp=>console.log(resp))
  }
  ngOnInit() {
    this.reactive=this.fb.group({
      
    ssc:this.fb.array([
      this.fb.group({
        sname:[],
        smarks:[],
        syear:[]
      })
    ]),
    
    inter:this.fb.array([
      this.fb.group({
        iname:[],
        imarks:[],
        iyear:[]
      })
    ]),
    
    graduate:this.fb.array([
      this.fb.group({
        gname:[],
        gmarks:[],
        gyear:[]
      })
    ]),
   
      pgraduate:this.fb.array([
        this.fb.group({
        pname:[],
          pmarks:[],
          pyear:[]
        })
      ])
  
    })
    
      
    
     
    
      
      
       
      
        
        
  }

}
