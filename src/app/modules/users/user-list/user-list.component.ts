import { Component, OnInit } from '@angular/core';
import { Users } from '../../../share/models/users.model';
import { SecurityService } from '../../../core/services/security.service';

@Component({
  selector: 'doggy-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {
  public list: Users[];

  constructor(private readonly userService: SecurityService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  private getUserList():void {
    this.userService.getUsers().subscribe(
      (result: Users[]) =>{ 
        this.list = result;
        console.log(result);
      },
      (error) => { 
        console.error(error);
      }
    )    
  }

  public showUserInfo(user: Users): void { 
    console.log(user.name);
  }

}
