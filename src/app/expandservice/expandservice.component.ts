import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expandservice',
  templateUrl: './expandservice.component.html',
  styleUrls: ['./expandservice.component.css']
})
export class ExpandserviceComponent implements OnInit {

  constructor(private service: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  shareExperience(){
    this.router.navigate(['share']);
  }

}
