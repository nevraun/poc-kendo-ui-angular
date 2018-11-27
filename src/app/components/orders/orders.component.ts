import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { OrdersService } from "../../shared/ordersd.service";
import { tap, switchMap } from "rxjs/internal/operators";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  public loading: boolean;

  public state: any = {
    skip: 0,
    take: 100
  };

  public query: any;
  private stateChange = new BehaviorSubject<any>(this.state);

  constructor(private service: OrdersService) {

    this.query = this.stateChange.pipe(
      tap(state => {
        this.state = state;
        this.loading = true;
      }),
      switchMap(state => service.fetch(state)),
      tap(() => {
        this.loading = false;
      })
    );
  }

  public pageChange(state: any): void {
    this.stateChange.next(state);
  }
}
