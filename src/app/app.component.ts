import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLang = 'en-US'; // Default language

  constructor(private location: Location) {
    // Detect current language from URL
    const path = window.location.pathname;
    if (path.includes('/es-PR/')) {
      this.currentLang = 'es-PR';
    }
  }

  switchLanguage() {
    // Toggle between English and Spanish
    this.currentLang = this.currentLang === 'en-US' ? 'es-PR' : 'en-US';

    // Update the URL and reload the app
    const newUrl = `/${this.currentLang}/`;
    window.location.href = newUrl;
  }
}
