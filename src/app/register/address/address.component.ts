import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { tap, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { DataService } from '../data.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  public isSameAddressControl: FormControl = new FormControl(false);

  // public addresses: FormGroup = this.fb.group({
  //   PresentAddress: this.fb.group({
  //     state: '',
  //     city: '',
  //     village: '',
  //     pincode:''
  //   }),
  //   PremanentAddress: this.fb.group({
  //     state: '',
  //     city: '',
  //     village: '',
  //     pincode:''
  //   })
  // });

  reactive=this.fb.group({
    
    PresentAddress:this.fb.array([
    this.fb.group({
      state: '',
      city: '',
      village: '',
      pincode:''
    })
  ]),
  PremanentAddress:this.fb.array([
    this.fb.group({
      state: '',
      city: '',
      village: '',
      pincode:''
    })
  ]),


  })
save() {
  this.s.neelu6(this.reactive.value).subscribe(resp=>console.log(resp))
}
  constructor(private fb: FormBuilder,private s:DataService) { }

  ngOnInit() {
    this.isSameAddressControl
      .valueChanges
      .pipe(
        distinctUntilChanged(),
        switchMap(isSameAddress => {
          if (isSameAddress) {
            return this.reactive
              .get('PresentAddress')
              .valueChanges
              .pipe(
                // at the beginning fill the form with the current values
                startWith(this.reactive.get('PresentAddress').value),
                tap(value =>
                  // every time the sending address changes, update the billing address 
                  this.reactive
                    .get('PremanentAddress')
                    .setValue(value)
                )
              )
          } else {
            this.reactive
              .get('PremanentAddress')
              .reset();

            return EMPTY;
          }
        })
        // don't forget to unsubscribe when component's destroyed
      )
      .subscribe();
  }
}