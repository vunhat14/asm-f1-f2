import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NewlineToBrPipe } from '../../pipes/newline-to-br.pipe';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule, NewlineToBrPipe],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;
  relatedProjects: Project[] = [];

  // Font awesome icons
  faGithub = faGithub;
  faExternalLink = faExternalLinkAlt;
  faArrowLeft = faArrowLeft;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convert to number
      this.projectService.getProjectById(id).subscribe(project => {
        this.project = project;

        // Get related projects (ones with same category)
        if (project && project.category) {
          this.projectService.getProjects().subscribe(projects => {
            this.relatedProjects = projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3); // Limit to 3 related projects
          });
        }
      });
    });
  }
}
