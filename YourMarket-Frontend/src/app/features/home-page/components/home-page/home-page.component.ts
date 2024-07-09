import { Component } from '@angular/core';
import { NavComponent } from '../../../../core/components/nav/nav.component';
import { ContactSectionViewComponent } from '../contact-section-view/contact-section-view.component';
import { FooterComponent } from '../../../../core/components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavComponent, ContactSectionViewComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
