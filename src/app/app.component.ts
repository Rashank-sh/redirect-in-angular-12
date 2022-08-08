import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redired';
  
  constructor() {
    window.location.href = "https://www.microsoft.com/en-in/windows/";
  }
}
