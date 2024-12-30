import { Component } from '@angular/core';
import { ShowcaseItemComponent } from "./showcase-item/showcase-item.component";
import projects from '../core/projects.json';
import { IProject } from '../core/models/project';
@Component({
  selector: 'app-showcase',
  imports: [ShowcaseItemComponent],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss',
})

export class ShowcaseComponent {
  projects: IProject[] = projects;
}
