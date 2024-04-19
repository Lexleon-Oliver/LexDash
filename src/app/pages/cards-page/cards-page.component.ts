import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-cards-page',
  standalone: true,
  imports: [
    PageLayoutComponent,
    CardComponent,

  ],
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.scss'
})
export class CardsPageComponent {

}
