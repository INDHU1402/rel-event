import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent implements OnInit {
  User:any;
  myBlogs:any;
    constructor(private service: UserService,private router: Router) { }
  
    ngOnInit(): void {
      this.User = JSON.parse(localStorage.getItem('userDetails'));
      console.log("user = " + JSON.stringify(this.User));
      this.service.getmyBlogsList(this.User.userId).subscribe((result: any) => {
        console.log(result);this.myBlogs= result });
    
  }
  readmore(blog: any) {
    localStorage.setItem('Blog', JSON.stringify(blog));
    this.router.navigate(['readblog']);
  }
}
