import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogincardComponent } from './components/Loginpage/logincard/logincard.component';
import { ProSettingsComponent } from './components/Profile/pro-settings/pro-settings.component';
import { UserprofileComponent } from './components/Profile/userprofile/userprofile.component';
import { SignupComponent } from './components/Loginpage/singup/signup.component';
import { LoginComponent } from './components/Loginpage/login/login.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "chat", component: HomeComponent },
  {
    path: "Login", component: LogincardComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'logincard', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: "profile-settings", component: ProSettingsComponent },
  { path: "userprofile", component: UserprofileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [HomeComponent, LogincardComponent, ProSettingsComponent]