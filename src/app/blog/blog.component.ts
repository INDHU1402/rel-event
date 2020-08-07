import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs : any;
  User: any;
  Professional: any;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.service.getBlogList() .subscribe((result: any) => { console.log(result); this.blogs = result} );
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    this.Professional = JSON.parse(localStorage.getItem('profDetails'));
  }

  addblog() {
    if (this.User) {
      this.router.navigate(['blogform']);
    }
    else if (this.Professional) {
      this.router.navigate(['blogform']);
    }
    else {
      alert('Please login to write blog');
    }
  }

  readmore(blog: any) {
    localStorage.setItem('Blog', JSON.stringify(blog));
    this.router.navigate(['readblog']);
  }
  
}
