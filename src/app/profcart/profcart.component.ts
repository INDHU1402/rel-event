import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profcart',
  templateUrl: './profcart.component.html',
  styleUrls: ['./profcart.component.css']
})
export class ProfcartComponent implements OnInit {
  professionals: any;

  constructor(private service: UserService, private router: Router) { }
  term: string;

  ngOnInit(): void {
    this.service.getProfessionalList().subscribe((result: any) => { console.log(result); this.professionals = result} );
    console.log(this.professionals);
  }

}
