import { Component, OnInit } from '@angular/core';
import { EventsHubService } from '../services/events-hub.service';
import { AuthenticationService } from '../services/authentication.service';
import { SecurityService } from '../services/security.service';
import { Users } from 'src/app/share/models/users.model';

@Component({
  selector: 'doggy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean;
  public loginUser: Users;
  public userName: string;
  public profileImage: string;
  public roles:string;

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
          this.loginUser = this.authenticationService.getLoggedUser();
          this.roles= this.authenticationService.getLoggedUser().roles;
        }
      }
    )
  }

}
