import { Component } from '@angular/core';
import { ContactSectionViewComponent } from '../contact-section-view/contact-section-view.component';

@Component({
  selector: 'app-home-page-view',
  standalone: true,
  imports: [ContactSectionViewComponent],
  templateUrl: './home-page-view.component.html',
  styleUrl: './home-page-view.component.scss'
})
export class HomePageViewComponent {

}
