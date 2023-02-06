import { Component } from '@angular/core';
import { DateModel } from './models/date-model';
import { GoogleEvent } from './models/event';

declare function handleAuthClick(): any;
declare function handleSignoutClick(): any;
declare function createNewEvent(event: any): any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  isLogged: boolean = false;
  googleEvent: GoogleEvent = {
    summary: '',
    location: '',
    description: '',
    start: {
      dateTime: '',
      timeZone: 'America/Campo_Grande'
    },
    end: {
      dateTime: '',
      timeZone: 'America/Campo_Grande'
    }
  };

  constructor() {}

  login() {
    handleAuthClick();
    this.isLogged = true;
  }

  createEvent(event: GoogleEvent) {
    console.log(event);
    createNewEvent(event);
  }
}
