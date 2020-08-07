import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var jQuery:any
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
User : any;
editObject:any;

    
  constructor(private service: UserService) {
    this.editObject = {userId:'',userName: '',contact: '', emailId: '',password: ''};
   }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('userDetails'));
  }
  showEditPopup(user: any) {
    this.editObject = user;
    jQuery('#userModel').modal('show');
  }

  updateUser() {
    this.service.updateUser(this.editObject).subscribe();
    console.log(this.editObject);
  }

}
