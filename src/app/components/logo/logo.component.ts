import { Component } from '@angular/core';
import { ReloadService } from '../../services/reload.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  constructor(
    private reloadService:ReloadService
  ){}

  onHome() {
    this.reloadService.reloadPage();
  }

  toggleSidebar() {
    document.body.classList.toggle('toggle-sidebar');
  }

}
