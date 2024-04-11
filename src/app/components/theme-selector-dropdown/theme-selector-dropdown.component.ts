import { Component } from '@angular/core';
import { ThemeSelectorItemComponent } from '../theme-selector-item/theme-selector-item.component';
import { ThemeItem } from '../../models/theme-item';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-theme-selector-dropdown',
  standalone: true,
  imports: [
    ThemeSelectorItemComponent,
  ],
  templateUrl: './theme-selector-dropdown.component.html',
  styleUrl: './theme-selector-dropdown.component.scss'
})
export class ThemeSelectorDropdownComponent {

  constructor(
    private themesService:ThemesService
  ){
  }
  themes: ThemeItem[] = this.themesService.getThemes();
}
