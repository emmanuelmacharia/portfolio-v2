import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IntroductionComponent,
    AboutComponent,
    ExperienceComponent,
    ShowcaseComponent,
    SkillsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
