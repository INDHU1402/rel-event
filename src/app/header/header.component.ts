import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  loggedIn: boolean;
  db : any;
  db1: any;
  constructor(private authService: SocialAuthService, private router: Router,private service: UserService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
  });
}
  signOut(): void {
    this.authService.signOut();
    this.service.setUserLoggedOut();
    this.db = null;
    localStorage.setItem("userDetails",JSON.stringify(this.db));
    this.db1 = null;
    localStorage.setItem("profDetails",JSON.stringify(this.db));
  }

  logout() : void {
    this.authService.signOut();
    this.loggedIn = false;
    this.router.navigate(['home']);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(['home']);
  }

  status() : boolean {
    this.db = JSON.parse(localStorage.getItem('userDetails'));
    this.db1 = JSON.parse(localStorage.getItem('profDetails'));
    return this.service.getUserLogged();
  }
}


