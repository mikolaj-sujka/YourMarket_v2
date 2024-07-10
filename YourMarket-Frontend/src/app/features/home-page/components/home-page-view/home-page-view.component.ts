import { Component } from '@angular/core';
import { ContactSectionViewComponent } from '../contact-section-view/contact-section-view.component';
import { HomePageComponent } from '../../containers/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page-view',
  standalone: true,
  imports: [ContactSectionViewComponent, HomePageComponent, CommonModule, RouterModule],
  templateUrl: './home-page-view.component.html',
  styleUrl: './home-page-view.component.scss'
})
export class HomePageViewComponent {

}
