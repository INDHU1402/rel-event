import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-experience',
  templateUrl: './share-experience.component.html',
  styleUrls: ['./share-experience.component.css']
})
export class ShareExperienceComponent implements OnInit {
  exp = {experience:'',professional: {professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', serviceName:'', serviceType:''}}
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addExperience() {
    console.log(this.exp);
  }
}
