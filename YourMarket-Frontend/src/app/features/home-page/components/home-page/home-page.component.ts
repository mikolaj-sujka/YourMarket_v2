import { Component } from '@angular/core';
import { NavComponent } from '../../../../core/components/nav/nav.component';
import { ContactSectionViewComponent } from '../contact-section-view/contact-section-view.component';
import { FooterComponent } from '../../../../core/components/footer/footer.component';
import { fadeInAnimation } from '../../../../shared/animations';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavComponent, ContactSectionViewComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [fadeInAnimation],
})
export class HomePageComponent {

}
