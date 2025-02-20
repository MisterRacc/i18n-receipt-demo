import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Get stored language or default to English
const savedLang = localStorage.getItem('lang');

// Detect if the user is visiting `/es-PR/`
const isSpanish = window.location.pathname.startsWith('/es-PR');

// Force English if no language is stored and URL is not Spanish
if (!savedLang && !isSpanish) {
  localStorage.setItem('lang', 'en-US');
  window.location.href = window.location.origin + '/en-US/';
} 

// Ensure stored preference is applied
if (savedLang === 'es-PR' && !isSpanish) {
  window.location.href = window.location.origin + '/es-PR/';
} else if (savedLang === 'en-US' && isSpanish) {
  window.location.href = window.location.origin + '/en-US/';
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
