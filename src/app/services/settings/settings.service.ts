import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  }
  constructor(
    @Inject(DOCUMENT) private _document
  ) { 
    this.loadSettings();
  }

  saveSettings(){
    localStorage.setItem('settings', JSON.stringify( this.settings ) );
  }

  loadSettings(){
    if(localStorage.getItem('settings')){
      this.settings = JSON.parse(localStorage.getItem('settings'));
      this.appyTheme(this.settings.theme);
    }
  }

  appyTheme( themeColor: string ){
    let url = `assets/css/colors/${ themeColor }.css`
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = themeColor;
    this.settings.themeUrl = url;
    this.saveSettings();
  }

}

interface Settings {
  themeUrl: string;
  theme: string;
}
