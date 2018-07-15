import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge',
      subMenu: [
        { title: 'Dashboard', url: '/dashboard'},
        { title: 'Progress', url: '/progress'},
        { title: 'Graphics', url: '/graficas1'}
      ]
    }
  ];

  constructor() { }

}
