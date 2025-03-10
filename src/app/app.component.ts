import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { SkillsComponent } from "./components/skills/skills.component";
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
    ShowcaseComponent,
    SkillsComponent,
    NavigationComponent,
    ContactComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
