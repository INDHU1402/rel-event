import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  Category: any = ['photography', 'event manganement', 'talk', 'food', 'others']
  blogDetails = {title:'', category:'', content:'', blogImage:'',
               userblog: {userId:'', contact:'', emailId:'', password:'', userName:''},
               profblog: {professionalId:'', professionalName:'', address:'', experience:'', mailId:'',mobile:'', serviceName:'', serviceType:'', serviceImage:''}};
  User: any;
  Professional: any;
  fileToUpload:File;
  reader:FileReader;
  imageUrl:String;
  constructor(private service: UserService, private router: Router) { 
    this.imageUrl = 'src/assets/img/birthday.jpg';
  }

  ngOnInit(): void {
    this.User = JSON.parse(localStorage.getItem('userDetails'));
    this.Professional = JSON.parse(localStorage.getItem('profDetails'));
   
  }

  handleFileInput(file:FileList){
    console.log("in handle");
    
    this.fileToUpload = file.item(0);
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.fileToUpload);
    this.reader.onload= (event:any)=>{
      this.imageUrl= event.target.result;
    };
  }

  addblog(blogForm:any) {
    if (this.User != null) {
      this.blogDetails.userblog.userId = this.User.userId;
    }
    if (this.Professional != null) {
      this.blogDetails.profblog.professionalId = this.Professional.professionalId;
    }
    console.log(this.blogDetails);
    this.service.postBlog(this.blogDetails,this.fileToUpload).subscribe(
      data => { 
        console.log('success1');
        this.imageUrl='/assets/img/bg.jpg';
      }
      );
    //this.service.addBlog(this.blogDetails).subscribe((result: any) => { result = this.blogDetails; console.log(result) } );
  }

}