import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  navItems = [
    {
      displayName: "About",
      link: ""
    },
    {
      displayName: "Experience",
      link: ""
    },
    {
      displayName: "Projects",
      link: ""
    }
  ]
}
