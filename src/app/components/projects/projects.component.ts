import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = [...projects];

      // Extract unique categories
      const uniqueCategories = new Set<string>();
      projects.forEach(project => {
        if (project.category) {
          uniqueCategories.add(project.category);
        }
      });

      this.categories = Array.from(uniqueCategories);
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.category === category
      );
    }
  }
}
