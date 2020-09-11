import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  prof: any;

  constructor() { }

  ngOnInit(): void {
    this.prof = JSON.parse(localStorage.getItem('prof'));
  }
 

}