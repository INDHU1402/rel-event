import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-technical-event',
  templateUrl: './technical-event.component.html',
  styleUrls: ['./technical-event.component.css']
})
export class TechnicalEventComponent implements OnInit {
  isLinear = false;
 

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    
  }
}
