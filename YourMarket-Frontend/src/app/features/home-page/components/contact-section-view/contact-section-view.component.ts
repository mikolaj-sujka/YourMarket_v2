import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-contact-section-view',
  standalone: true,
  imports: [FloatLabelModule],
  templateUrl: './contact-section-view.component.html',
  styleUrl: './contact-section-view.component.scss'
})
export class ContactSectionViewComponent {

}
