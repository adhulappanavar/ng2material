import { Component } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
spaceScreens: Array<any>;


  constructor(private http:Http) {
    
    this.http.get('./data.json')
      .do( res => console.log('HTTP response:', res))
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);

  }
}
