import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadService {

  constructor() { }

  reloadPage() {
    window.location.reload();
  }
}
