import { Component, input } from '@angular/core';
import { IProject } from '../../../core/models/project';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-showcase-item',
  imports: [FontAwesomeModule],
  templateUrl: './showcase-item.component.html',
  styleUrl: './showcase-item.component.scss',
})
export class ShowcaseItemComponent {
  github=faGithub;
  link=faArrowUpRightFromSquare;
  project = input.required<IProject>();
}
