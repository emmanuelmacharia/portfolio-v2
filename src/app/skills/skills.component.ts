import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent{
  sections: Map<string, string[]> = new Map([
      ["languages", ["Python", "Typescript", "Javascript", "C#", "HTML", "CSS/SCSS", "SQL"]],
      ["frameworks & libraries", ["Angular", "React", "Next", "Node", "Flask", ".NET Framework", "Express", "Angular Material", "Bootstrap", "Tensorfiow", "Pytorch", "Scikit-learn", "Matplotlib", "Pandas"]],
      ["tools", ["Git & Github", "Bash", "Powershell", "Postman", "Markdown", "Anaconda"]],
      ["devops", ["Docker", "Kubernetes","Azure", "Azure Pipelines", "Heroku", "Gh-Actions", "Netlify" ]],
      ["databases", ["SQL Server", "MySql", "MongoDB", "PostgreSQL", "Redis"]]
    ]
  )

  categories = ['languages', 'frameworks & libraries', 'tools', 'devops', 'databases'];
}
