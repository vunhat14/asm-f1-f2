import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Fixed the property name from styleUrl to styleUrls
})
export class HomeComponent {
  faArrowRight = faArrowRight;
}
