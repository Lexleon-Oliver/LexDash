import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    PageLayoutComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
