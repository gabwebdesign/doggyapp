import { Component, OnInit } from '@angular/core';
import { EventsHubService } from 'src/app/core/services/events-hub.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { SecurityService } from 'src/app/core/services/security.service';
import { Users } from 'src/app/share/models/users.model';

@Component({
  selector: 'doggy-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {
  public user: any;
  public isLoggedIn: boolean;
  public userID: number;
  public userName: string;

  constructor(
    private readonly evenHubService: EventsHubService,
    private readonly authenticationService: AuthenticationService,
    private readonly securityServices: SecurityService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = false;
    this.evenHubService.loggedIns$.subscribe(
      (result) => {
        this.isLoggedIn = result;
        if (this.isLoggedIn) {
          this.userID = this.authenticationService.getLoggedUser().id;
          this.securityServices.getUser(this.userID).subscribe(
            (result) => {
              this.user = result;
            }
          )

        }
      }
    )
  }

  public showUserInfo(user: Users): void { 
    console.log(user.name);
  }
}
