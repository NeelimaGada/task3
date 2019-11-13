import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from '../register/register.module';
import { ListModule } from '../list/list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RegisterModule,ListModule
  ]
})
export class MainModule { }
