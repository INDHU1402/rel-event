import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit {
  Category: any = ['photography', 'event manganement', 'talk', 'food', 'others']
  blogDetails = {title:'', category:'', content:'',
               userblog: {userId:'', contact:'', emailId:'', password:'', userName:''},
               profblog: {professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', serviceName:'', serviceType:''}};
  User: any;
  Professional: any;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    this.Professional = JSON.parse(localStorage.getItem('profDetails'));
  }

  addblog(blogForm:any) {
    /*if (this.User != null) {
      this.blogDetails.user.userId = this.User.userId;
    }
    if (this.Professional != null) {
      this.blogDetails.professional.professionalId = this.Professional.professionalId;
    }*/
    console.log(this.blogDetails);
    this.service.addBlog(this.blogDetails).subscribe((result: any) => { result = this.blogDetails; console.log(result) } );
  }
}
