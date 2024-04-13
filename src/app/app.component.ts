import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemesService } from './services/themes.service';
import { ThemeItem } from './models/theme-item';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonUpComponent } from './components/button-up/button-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ButtonUpComponent,

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
