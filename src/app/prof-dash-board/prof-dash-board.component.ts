import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
declare var jQuery: any
@Component({
  selector: 'app-prof-dash-board',
  templateUrl: './prof-dash-board.component.html',
  styleUrls: ['./prof-dash-board.component.css']
})
export class ProfDashBoardComponent implements OnInit {
Prof:any;
myEvents:any;
editObject:any;
  constructor(private service: UserService,private router: Router) {

    this.editObject= {professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', serviceName:'', serviceType:'',serviceImage:'',password:''};
   }

  ngOnInit(): void {
    this.Prof = JSON.parse(localStorage.getItem('profDetails'));
    this.service.getMyEvents(this.Prof.professionalId).subscribe((result: any) => {
      console.log(result);this.myEvents= result });
  }
  showEditPopup(user: any) {
    this.editObject = user;
    jQuery('#userModel').modal('show');
  }

  updateUser() {
    //this.service.updateProf(this.editObject).subscribe();
    console.log(this.editObject);
    this.router.navigate(['dashboard']);
  }

}
