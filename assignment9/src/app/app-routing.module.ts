import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {DestinationComponent} from './destination/destination.component';
import { BostonComponent } from './boston/boston.component';
import { ColumbusComponent } from './columbus/columbus.component';
import { WorcesterComponent } from './worcester/worcester.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'destination', component: DestinationComponent},
  {path: 'boston', component: BostonComponent},
  {path: 'columbus', component: ColumbusComponent},
  {path: 'worcester', component: WorcesterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


