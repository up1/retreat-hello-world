import { Component, OnInit } from '@angular/core';
import { RestApiService } from './shared/rest-api.service';
import { Message } from './shared/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  result: string;

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    return this.restApi.getMessage().subscribe((data: Message) => {
      this.result = data.message;
    });
  }
}
