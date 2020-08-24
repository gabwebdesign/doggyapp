import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ShareModule } from '../../share/share.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info/user-info.component';


@NgModule({
  declarations: [UserListComponent, UserInfoComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ShareModule
  ]
})
export class UsersModule { }
