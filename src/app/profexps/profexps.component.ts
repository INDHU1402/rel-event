import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profexps',
  templateUrl: './profexps.component.html',
  styleUrls: ['./profexps.component.css']
})
export class ProfexpsComponent implements OnInit {
  Prof: any;
  myExps: any;

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
    this.Prof = JSON.parse(localStorage.getItem('profDetails'));
    this.service.getMyExperiences(this.Prof.professionalId).subscribe((result: any) => {
      console.log(result);this.myExps= result });
  }

}
