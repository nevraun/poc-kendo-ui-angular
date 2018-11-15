import { Component } from '@angular/core';
import { ReqresApiService } from "./shared/reqres-api.service";
import { Observable } from "rxjs/Rx";
import { DataStateChangeEvent, GridDataResult } from "@progress/kendo-angular-grid";
import { State } from "@progress/kendo-data-query";
import { CategoriesService } from "./shared/northwind.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public view: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 5
  };

  constructor(private apiService: ReqresApiService, private service: CategoriesService) {
    apiService.getUsers().subscribe(data => console.log(data));

    this.view = service;
    this.service.query(this.state);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.service.query(state);
  }
}
