import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: UserInfoComponent
    //component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
