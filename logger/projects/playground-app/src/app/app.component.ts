import { Component } from '@angular/core';
import { LoggerService } from '@my/logger-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private loggerService: LoggerService) {
    loggerService.debug('Manfred was here!');
    loggerService.log('Application started!');
  }
}
