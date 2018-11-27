import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Rx";
import { DataStateChangeEvent, GridDataResult } from "@progress/kendo-angular-grid";
import { State } from "@progress/kendo-data-query";

import { CategoriesService } from "../../shared/northwind.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public view: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 5
  };

  constructor(private service: CategoriesService) {
    this.view = service;
    this.service.query(this.state);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.service.query(state);
  }

  ngOnInit() {
  }
}
