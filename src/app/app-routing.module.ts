import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NamesComponent } from './register/names/names.component';
import { ListComponent } from './list/list/list.component';


const routes: Routes = [
  {path:'',component:NamesComponent},
  {path:'list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
