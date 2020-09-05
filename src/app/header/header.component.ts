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
  db: any;
  db1: any;
  check: boolean;
  User = { userName: '', contact: '', emailId: '', password: '' };
  constructor(private authService: SocialAuthService, private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    
      this.User.userName = this.user.name;
      this.User.emailId = this.user.email;
      console.log("username = " + this.User.userName);

      this.service.isUsernameExists(this.user.name).subscribe((result: any) => {
        this.check = result; console.log("result value = " + result);

        if (result) {
          this.service.registerUser(this.User).subscribe((details: any) => { console.log(details) });
          console.log('signup ' + this.User);

          this.service.getSocialUser(this.User.userName).subscribe((result: any) => {console.log("result value = " + result);
          localStorage.setItem("userDetails", JSON.stringify(result));
          this.service.setUserLoggedIn();
          this.router.navigate(['']);
        });
        }
        else {
          console.log('login');
          this.service.getSocialUser(this.User.userName).subscribe((result: any) => {console.log("result value = " + result);
          localStorage.setItem("userDetails", JSON.stringify(result));
          this.service.setUserLoggedIn();
          this.router.navigate(['']);
        });
        }
      });
    });
  }
  signOut(): void {
    this.authService.signOut();
    this.service.setUserLoggedOut();
    this.db = null;
    localStorage.setItem("userDetails", JSON.stringify(this.db));
    this.db1 = null;
    localStorage.setItem("profDetails", JSON.stringify(this.db));
  }

  logout(): void {
    this.authService.signOut();
    this.loggedIn = false;
    this.router.navigate(['homePage']);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  status(): boolean {
    this.db = JSON.parse(localStorage.getItem('userDetails'));
    this.db1 = JSON.parse(localStorage.getItem('profDetails'));
    console.log("user "+this.db);
    console.log("prof "+this.db1);
    


    return this.service.getUserLogged();
  }
}


