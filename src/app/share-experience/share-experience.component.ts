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
  prof: any;
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.prof = JSON.parse(localStorage.getItem('profDetails'));
  }

  addExperience() {
    this.exp.professional.professionalId = this.prof.professionalId;
    console.log(this.exp);
    this.service.addExperience(this.exp).subscribe((details: any) => {console.log(details)});
  }
}
