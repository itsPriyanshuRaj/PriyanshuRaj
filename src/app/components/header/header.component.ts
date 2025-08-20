import { Component } from '@angular/core';
import { faHome ,faBook} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn , faXTwitter, faHashnode} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faHome: IconProp = faHome;
  // faHome = faHome;
  faBook = faBook;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faXTwitter = faXTwitter;
  faHashnode = faHashnode;
}
