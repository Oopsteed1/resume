import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutobiographyComponent } from './autobiography/autobiography.component';
import { EduAndWorkComponent } from './edu-and-work/edu-and-work.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillComponent } from './skill/skill.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    AutobiographyComponent,
    EduAndWorkComponent,
    NavTabComponent,
    PersonalInfoComponent,
    SkillComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
