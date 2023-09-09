import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Recorrido FIA', url: '/recorrido', icon: 'paper-plane' },
    { title: 'Directorio', url: '/directorio', icon: 'paper-plane' },
    { title: 'Conoce las Aulas de la FIA', url: '/aulas', icon: 'paper-plane' },
    { title: 'Graduados', url: '/graduados', icon: 'paper-plane' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
