import { Component, ViewChild } from '@angular/core';
import { DecoratePipe } from './pipes/decorate.pipe';
import { Weekdays } from './models/weekdays';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [DecoratePipe],
  templateUrl: './welcome.html',
  styles: ``
})
export class Welcome {
  Weekdays = Weekdays;
  ledColor = "#FFAA33";

  constructor() {
    console.log(Weekdays.Monday, Weekdays[Weekdays.TuesDay]);
  }

  componentChanged(newColor: string) {
    console.log(newColor);
  }
}
