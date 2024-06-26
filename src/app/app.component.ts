import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemesService } from './services/themes.service';
import { ThemeItem } from './models/theme-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LexDash';
  defaultTheme!: ThemeItem;

  constructor(
    private themesService:ThemesService
  ){
    this.defaultTheme= themesService.getThemeByText('Claro');
    themesService.setSelectedTheme(this.defaultTheme);

  }
}
