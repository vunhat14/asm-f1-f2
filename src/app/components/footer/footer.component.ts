import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'] // Fixed styleUrl to styleUrls
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;

  currentYear = new Date().getFullYear();
}
