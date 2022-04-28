import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './Components/school/school.component';
import { School1Component } from './school1/school1.component';

const routes: Routes = [{path:'school1',component:School1Component},
{path:'school',component:SchoolComponent},  {path:'',redirectTo:'/school',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
