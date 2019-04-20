import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GooglePlacesDirective } from './google-places.directive';
import { DestinationComponent } from './destination/destination.component';
import { BostonComponent } from './boston/boston.component';
import { ColumbusComponent } from './columbus/columbus.component';
import { WorcesterComponent } from './worcester/worcester.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    GooglePlacesDirective,
    DestinationComponent,
    BostonComponent,
    ColumbusComponent,
    WorcesterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
