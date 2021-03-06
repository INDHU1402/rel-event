import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.css']
})
export class ReadblogComponent implements OnInit {
  blog : any;
  status: boolean;
  status1: boolean;
  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.blog = JSON.parse(localStorage.getItem('Blog'));
    console.log(this.blog);
    if(this.blog.profblog == null) {
      this.status = false;
      this.status1 = true;
      console.log('is prof null = ' + this.status);
    }
    if(this.blog.userblog == null) {
      this.status1 = false;
      this.status = true;
      console.log('is user null = ' + this.status1);

    }
  }
  prof(p : any) {
    localStorage.setItem("prof", JSON.stringify(p));
    this.router.navigate(['professional']);
  }

}
