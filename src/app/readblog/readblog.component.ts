import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.component.html',
  styleUrls: ['./readblog.component.css']
})
export class ReadblogComponent implements OnInit {
  blog : any;
  constructor() { }

  ngOnInit(): void {
    this.blog = JSON.parse(localStorage.getItem('Blog'));
    console.log(this.blog);
  }

}
