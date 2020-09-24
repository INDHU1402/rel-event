import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GoogleLoginProvider } from 'angularx-social-login';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ShoweventComponent } from './showevent/showevent.component';
import { PaymentComponent } from './payment/payment.component';
import { BillComponent } from './bill/bill.component';
import { ExpandserviceComponent } from './expandservice/expandservice.component';
import { BlogformComponent } from './blogform/blogform.component';
import { BlogComponent } from './blog/blog.component';
import { GetintroPipe } from './getintro.pipe';
import { ReadblogComponent } from './readblog/readblog.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { SponsorformComponent } from './sponsorform/sponsorform.component';
import { ShareExperienceComponent } from './share-experience/share-experience.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MyeventsComponent } from './myevents/myevents.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { BookedEventsComponent } from './booked-events/booked-events.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfeventsComponent } from './profevents/profevents.component';
import { ProfblogsComponent } from './profblogs/profblogs.component';
import { ProfexpsComponent } from './profexps/profexps.component';
import { AlertsModule } from 'angular-alert-module';      
import { ToastrModule } from 'ngx-toastr';
import { PersonalGatheringsComponent } from './personal-gatherings/personal-gatherings.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { ProfsignupComponent } from './profsignup/profsignup.component';
import { EventComponent } from './event/event.component';
import { CreateEventFormComponent } from './create-event-form/create-event-form.component';
import { EventProfsComponent } from './event-profs/event-profs.component';
import { TechFormComponent } from './tech-form/tech-form.component';
import { ProffcartComponent } from './proffcart/proffcart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateComponent } from './date/date.component';
import {MatNativeDateModule} from '@angular/material/core';
import { CulturalEventComponent } from './cultural-event/cultural-event.component';

import { PersonalEventComponent } from './personal-event/personal-event.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ProfcartComponent } from './profcart/profcart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfDashBoardComponent } from './prof-dash-board/prof-dash-board.component';
import { BlogFormComponent } from './blog-form/blog-form.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DetailsComponent } from './details/details.component';
import { OtpComponent } from './otp/otp.component';


const appRoot: Routes = [{path:'home', component: HomeComponent},
                         {path:'login', component: LoginComponent},
                         {path:'ticket', component: BookticketComponent},
                         {path:'showEvent', component: ShoweventComponent},
                         {path:'payment', component: PaymentComponent},
                         {path:'bill', component: BillComponent},
                         {path:'blog', component:BlogComponent},
                         {path:'blogform', component:BlogFormComponent},
                         {path:'readblog', component:ReadblogComponent},
                         {path:'expandService', component:ExpandserviceComponent},
                         {path:'createEvent', component:CreateEventComponent},
                         {path:'sponsor', component:SponsorformComponent},
                         {path:'share', component:ShareExperienceComponent},
                         {path:'userprofile', component:UserProfileComponent},
                         {path:'myEvents', component:MyeventsComponent},
                         {path:'myBlogs', component:MyBlogsComponent},
                         {path:'bookedEvents', component:BookedEventsComponent},
                         {path:'', component:HomePageComponent},
                         {path:'profEvents', component:ProfeventsComponent},
                         {path:'profBlogs', component:ProfblogsComponent},
                         {path:'profExps', component:ProfexpsComponent},
                         {path:'usersignup', component:UsersignupComponent},
                         {path:'profsignup', component:ProfsignupComponent},
                         {path:'personalGathering', component:PersonalGatheringsComponent},
                         {path:'event', component:EventComponent},
                         {path:'eventform', component:CreateEventFormComponent},
                         {path:'eventprofs', component:EventProfsComponent},
                         {path:'techform', component:TechFormComponent},
                         {path:'cart', component:ProffcartComponent},
                         {path:'culturalEvent', component: CulturalEventComponent},
                       
                         {path:'personalEvent', component:PersonalEventComponent},
                         {path:'profcart', component:ProfcartComponent},
                         {path:'dashboard', component:DashboardComponent},
                         {path:'profdashboard', component:ProfDashBoardComponent},
                    
                         {path:'forgot', component:ForgotpasswordComponent},
                         {path:'fp1', component:DetailsComponent},
                         {path:'fp2', component:OtpComponent}
                         
                         
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    BookticketComponent,
    ShoweventComponent,
    PaymentComponent,
    BillComponent,
    ExpandserviceComponent,
    BlogformComponent,
    BlogComponent,
    GetintroPipe,
    ReadblogComponent,
    CreateEventComponent,
    SponsorformComponent,
    ShareExperienceComponent,
    UserProfileComponent,
    MyeventsComponent,
    MyBlogsComponent,
    BookedEventsComponent,
    HomePageComponent,
    ProfeventsComponent,
    ProfblogsComponent,
    ProfexpsComponent,
    PersonalGatheringsComponent,
    UsersignupComponent,
    ProfsignupComponent,
    EventComponent,
    CreateEventFormComponent,
    EventProfsComponent,
    TechFormComponent,
    ProffcartComponent,
    DateComponent,
    CulturalEventComponent,
  
    PersonalEventComponent,
    ProfcartComponent,
    DashboardComponent,
    ProfDashBoardComponent,
    BlogFormComponent,

    ForgotpasswordComponent,
    DetailsComponent,
    OtpComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatStepperModule, MatInputModule, MatButtonModule,
   MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule, 
    SocialLoginModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoot),
    AlertsModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),
    NgbModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '431614354007-esf351jcdb29icveib8r8k93bklgv157.apps.googleusercontent.com'
            ),
          },
          
        ],
      } as SocialAuthServiceConfig,
    }
  ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
