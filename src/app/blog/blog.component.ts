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
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.service.getBlogList() .subscribe((result: any) => { console.log(result); this.blogs = result} );
  }

  addblog() {
    this.router.navigate(['blogform']);
  }

  readmore(blog: any) {
    localStorage.setItem('Blog', JSON.stringify(blog));
    this.router.navigate(['readblog']);
  }
  
}
