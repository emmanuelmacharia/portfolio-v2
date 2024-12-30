import { Component } from '@angular/core';
import { ExperienceItemComponent } from "./experience-item/experience-item.component";
import experiences from "../core/experience.json";
import { IExperience } from '../core/models/experience';

@Component({
  selector: 'app-experience',
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences: IExperience[] = experiences;
}
