import { Component } from '@angular/core';
import { ReloadService } from '../../services/reload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  constructor(
    private reloadService:ReloadService,
    private router : Router

  ){}

  goHome() {
    this.router.navigate(['home']);
  }

  toggleSidebar() {
    document.body.classList.toggle('toggle-sidebar');
  }

}
