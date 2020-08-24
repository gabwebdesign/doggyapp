import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../../share/models/credentials.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'doggy-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public credentials: Credentials = new Credentials();
  public submitted: boolean;
  public errorMsg: string='';

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  public login(form):void{ 
    this.submitted = true;
    if (!form.valid) return
      
    this.authenticationService
      .login(this.credentials)
      .then(() => {
        this.router.navigateByUrl('/dashboard');
      })
      .catch((error) => {
        this.errorMsg = error.message;
      });
    }
}
