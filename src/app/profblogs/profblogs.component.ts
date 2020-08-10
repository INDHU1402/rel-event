import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profblogs',
  templateUrl: './profblogs.component.html',
  styleUrls: ['./profblogs.component.css']
})
export class ProfblogsComponent implements OnInit {
  Prof: any;
  myBlogs: any;

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
    this.Prof = JSON.parse(localStorage.getItem('profDetails'));
    this.service.getMyBlogs(this.Prof.professionalId).subscribe((result: any) => {
      console.log(result);this.myBlogs= result });
  }

  readmore(blog: any) {
    localStorage.setItem('Blog', JSON.stringify(blog));
    this.router.navigate(['readblog']);
  }

}
