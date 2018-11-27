import { Component } from '@angular/core';
import { ReqresApiService } from "./shared/reqres-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ReqresApiService) {
    apiService.getUsers().subscribe(data => console.log(data));
  }
}
