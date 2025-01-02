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
      link: "#about"
    },
    {
      displayName: "Experience",
      link: "#experience"
    },
    {
      displayName: "Projects",
      link: "#projects"
    }
  ]
}
