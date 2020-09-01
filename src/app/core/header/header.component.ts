import { Component, OnInit } from '@angular/core';
import { EventsHubService } from '../services/events-hub.service';
import { AuthenticationService } from '../services/authentication.service';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'doggy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean;
  public userID: number;
  public userName: string;
  public profileImage: string;

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
        if(this.isLoggedIn) { 
          this.userID = this.authenticationService.userId;
          this.securityServices.getUser(this.userID).subscribe(
            (result) => { 
              this.userName = result["name"];
              this.profileImage = result["profileImage"];
            }
          )

        }
      }
    )
  }

}
