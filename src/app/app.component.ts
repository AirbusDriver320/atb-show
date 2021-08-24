import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://rest-api-mern.herokuapp.com/products/atb';
  pageData = {};

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      this.pageData = data;
    });
  }

  title = 'atb-show';
}
