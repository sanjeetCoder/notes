import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent} from './user/user.component';
import {UserDetailsComponent} from './user-details/user-details.component'

const routes: Routes = [
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"detail",
    component:UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
