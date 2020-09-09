import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  title = 'springboot-frontend';
  httpdata;

  ngOnInit() {
    this.http.get('http://localhost:8081/api/cities')
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data) { this.httpdata = data; }
}
