import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent{
  sections: Map<string, string[]> = new Map([
      ["languages", ["Python", "Typescript", "Javascript", "C#", "HTML", "CSS/SCSS", "SQL"]],
      ["frameworks & libraries", ["Angular", "React", "Vue", "Next JS", "Node", "Flask", ".NET Framework", "Express", "Angular Material", "Bootstrap",  "Tailwind css", "MUI"]],
      ["AI & data", ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Matplotlib", "Pandas", "Numpy"]],
      ["tools", ["Git & Github", "Bash", "Powershell", "Postman", "Markdown", "Anaconda"]],
      ["devops", ["Docker", "Kubernetes","Azure", "Azure Pipelines", "Heroku", "Gh-Actions", "Netlify" ]],
      ["databases", ["SQL Server", "MySql", "MongoDB", "PostgreSQL", "Redis", "SingleStore"]]
    ]
  )

  categories = ['languages', 'frameworks & libraries', 'AI & data', 'tools', 'devops', 'databases'];

  bulletIcon = faBiohazard;
}
