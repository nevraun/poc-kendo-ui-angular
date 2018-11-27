import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { GridDataResult } from '@progress/kendo-angular-grid';

export abstract class OrdersDService {
  private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';

  constructor(
    private http: HttpClient,
    protected tableName: string
  ) {
  }

  public fetch(state: any): Observable<GridDataResult> {
    const queryStr = `${toODataString(state)}&$count=true`;

    return this.http
      .get(`${this.BASE_URL}${this.tableName}?${queryStr}`)
      .pipe(
        map(response => (<GridDataResult>{
          data: response['value'],
          total: parseInt(response['@odata.count'], 10)
        }))
      );
  }
}

@Injectable()
export class OrdersService extends OrdersDService {
  constructor(http: HttpClient) { super(http, 'Orders'); }
}
