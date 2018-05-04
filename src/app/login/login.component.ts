import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
<<<<<<< HEAD
  invalidLogin: boolean; 

  constructor(
    private router: Router, 
=======
  invalidLogin: boolean;

  constructor(
    private router: Router,
>>>>>>> df1d91b9832a2755019677c9ee3fcd1092de4700
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
<<<<<<< HEAD
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidLogin = true; 
=======
      .subscribe(result => {
        if (result)
            this.router.navigate(['/']);
        else
          this.invalidLogin = true;
>>>>>>> df1d91b9832a2755019677c9ee3fcd1092de4700
      });
  }
}
