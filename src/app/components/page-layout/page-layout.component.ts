import { Component, Input } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { SectionPageComponent } from '../section-page/section-page.component';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [
    PageTitleComponent,
    SectionPageComponent,
  ],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {

  @Input() divisor:string = '';
  @Input() pageTitle: any;
  @Input() columnClass: string = 'col-lg-12';
}
