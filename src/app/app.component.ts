import { Component, Directive } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title: string = "";
  Number1: number;
  Number2: number;
  Sum: number;
  constructor() {
    this.Title = 'Hello world app1234..';
    this.Number1 = 0;
    this.Number2 = 0;
    this.Sum = 0;
    
  }

  public CalculateSum(): void {
    this.Sum = parseInt(this.Number1.toString()) + parseInt(this.Number2.toString());
  }
}
