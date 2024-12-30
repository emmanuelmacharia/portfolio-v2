import { Component, input } from '@angular/core';
import { IExperience } from '../../core/models/experience';

@Component({
  selector: 'app-experience-item',
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss'
})
export class ExperienceItemComponent {
  experience = input.required<IExperience>();
}
