import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamesComponent } from './names/names.component';
import { EducationComponent } from './education/education.component';
import { AddressComponent } from './address/address.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { combineLatest } from 'rxjs';

const routes: Routes = [
  {path:'',component:NamesComponent},
 
];

@NgModule({
  declarations: [NamesComponent, EducationComponent, AddressComponent],
  imports: [
    CommonModule, FormsModule,ReactiveFormsModule,RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
