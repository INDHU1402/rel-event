import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  link: string;
  mail: string;
  check1="true";
 check2="false";
  name:string;
  password:string;
  
  
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  isLoading = false;
  
  toggleLoading = () => {
    this.isLoading = true;

    //Faking an API call
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  };
  /*
    resetPassword() {
      this.service.forgotpassword(this.mail).subscribe((result: any) => {console.log(result);});
      alert('Please Enter the OTP to continue');
      this.router.navigate(['otp']);
    }*/
fs(){
  this.router.navigate(['']);
}
  loginSubmit(loginForm: any): void {
    this.isLoading = true;
    this.service.isUsernameExists(this.name).subscribe((result1: any) => {
      this.check1 = result1; console.log("result value = " + result1);
    });
      this.service.isProfessionalExists(this.name).subscribe((result2: any) => {
        this.check2 = result2; console.log("result value = " + result2);
      });
       
          
           if (this.check2 ) {
            console.log(this.check2 +"this.check2")
            this.service.getProfessional(this.name, this.password).subscribe((result4: any) => {
              console.log("---" + result4);
              localStorage.setItem('profDetails', JSON.stringify(result4));
              setTimeout(() => {
                this.isLoading = false;
              }, 2000);
              if (result4) {
                this.service.setUserLoggedIn();
                this.router.navigate(['']);
              }
              else {
                console.log(this.check1 +"this.check1")
                this.service.getUser(this.name, this.password).subscribe((result3: any) => {
                  console.log(result3);
                  localStorage.setItem('userDetails', JSON.stringify(result3));
                  setTimeout(() => {
                    this.isLoading = false;
                  }, 2000);
                  if (result3) {
                    this.service.setUserLoggedIn();
                    this.router.navigate(['']);
                  }
                  else {
                    alert('Invalid credentials');
                  }
                });
                
    
              }
            });
            
          }
          
        
       
     
   
      }
       /* profSubmit(profForm: any): void{
           this.service.getProfessional(profForm.professionalName,profForm.password).subscribe((result: any) => {
             console.log(result);
             localStorage.setItem('profDetails', JSON.stringify(result));
               if(result) {
                 this.service.setUserLoggedIn();
                 this.router.navigate(['']); 
               }
               else {
                 alert('Invalid credentials');
               }});
             }
     
           navigateToSignUp(): void {
             this.router.navigate(['signup']);
           }

          }  */
        }