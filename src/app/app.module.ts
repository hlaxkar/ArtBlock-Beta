import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { CardComponent } from './components/card/card.component';
import { RightComponent } from './components/right/right.component';

import { NewPostComponent } from './components/new-post/new-post.component';
import { UserCardComponent } from './components/left-nav/user-card/user-card.component';

import { LoginComponent } from './components/Loginpage/login/login.component';
import { SignupComponent } from './components/Loginpage/singup/signup.component';

import { CommunityBoxComponent } from './components/left-nav/Communities/community-box/community-box.component';
import { CommunityItemComponent } from './components/left-nav/Communities/community-item/community-item.component';
import { ProSettingsComponent } from './components/Profile/pro-settings/pro-settings.component';

import { DropdownComponent } from './components/top-nav/dropdown/dropdown.component';
import { SkillGroupComponent } from './components/left-nav/skill-group/skill-group.component';
import { SkillComponent } from './components/left-nav/skill-group/skill/skill.component';
import { ActionBarComponent } from './components/pop-up/action-bar/action-bar.component';
import { StoriesComponent } from './components/stories/stories.component';
import { FormsModule } from '@angular/forms';
import { UserprofileComponent } from './components/Profile/userprofile/userprofile.component';
import { PostboxComponent } from './components/postbox/postbox.component';




@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LeftNavComponent,
    CardComponent,
    RightComponent,
    
    NewPostComponent,
    UserCardComponent,
    routingcomponents,
    LoginComponent,
    SignupComponent,
    CommunityBoxComponent,
    CommunityItemComponent,
    DropdownComponent,
    SkillGroupComponent,
    SkillComponent,
    ActionBarComponent,
    StoriesComponent,
    ProSettingsComponent,
    UserprofileComponent,
    PostboxComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
