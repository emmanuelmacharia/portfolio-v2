import { Component, input } from '@angular/core';
import { IProject } from '../../core/models/project';


@Component({
  selector: 'app-showcase-item',
  imports: [],
  templateUrl: './showcase-item.component.html',
  styleUrl: './showcase-item.component.scss',
})
export class ShowcaseItemComponent {
  project = input.required<IProject>();
}
