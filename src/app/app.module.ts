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
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { EventComponent } from './event/event.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GoogleLoginProvider } from 'angularx-social-login';
import { BookticketComponent } from './bookticket/bookticket.component';
import { ShoweventComponent } from './showevent/showevent.component';
import { PaymentComponent } from './payment/payment.component';
import { BillComponent } from './bill/bill.component';
import { FilterProfessionalComponent } from './filter-professional/filter-professional.component';
import { ExpandserviceComponent } from './expandservice/expandservice.component';
import { BlogformComponent } from './blogform/blogform.component';
import { BlogComponent } from './blog/blog.component';
import { GetintroPipe } from './getintro.pipe';
import { ReadblogComponent } from './readblog/readblog.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { MatStepperModule} from '@angular/material/stepper';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';

const appRoot: Routes = [{path:'home', component: HomeComponent},
                         {path:'signup', component: SignupComponent},
                         {path:'login', component: LoginComponent},
                         {path:'event', component: EventComponent},
                         {path:'ticket', component: BookticketComponent},
                         {path:'showEvent', component: ShoweventComponent},
                         {path:'payment', component: PaymentComponent},
                         {path:'bill', component: BillComponent},
                         {path:'filerProfessional', component: FilterProfessionalComponent},
                         {path:'blog', component:BlogComponent},
                         {path:'blogform', component:BlogformComponent},
                         {path:'readblog', component:ReadblogComponent},
                         {path:'expandService', component:ExpandserviceComponent},
                         {path:'createEvent', component:CreateEventComponent}
                         
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    EventComponent,
    BookticketComponent,
    ShoweventComponent,
    PaymentComponent,
    BillComponent,
    FilterProfessionalComponent,
    ExpandserviceComponent,
    BlogformComponent,
    BlogComponent,
    GetintroPipe,
    ReadblogComponent,
    CreateEventComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    AppRoutingModule,
    HttpClientModule, 
    SocialLoginModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoot)
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
