import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'; 
import {UserListComponent} from './user-list/user-list.component'; 



const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'userlist', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
