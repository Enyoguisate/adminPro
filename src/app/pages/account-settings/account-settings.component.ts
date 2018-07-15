import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private _settings: SettingsService
  ) { }

  ngOnInit() {
    this.placeCheck();
  }

  changeColor(themeColor: any, link: any){
    this.changeCheck(link);
    this._settings.appyTheme(themeColor);    
  }

  changeCheck(link: any){
    let selectors: any = document.getElementsByClassName('selector');
    for (let ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  placeCheck(){
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settings.settings.theme;
    for (let ref of selectors) {
      if(theme === ref.getAttribute('data-theme')){
        ref.classList.add('working');
        break;
      }      
    }    
  }

}
