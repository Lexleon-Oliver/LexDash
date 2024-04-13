import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year!: number;

  ngOnInit(): void {
    // Obtém o ano atual
    this.year = new Date().getFullYear();
  }
}
