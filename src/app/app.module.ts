import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from './shared/northwind.service';
import { OrdersService } from './shared/ordersd.service';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutModule } from '@progress/kendo-angular-layout';


const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [CategoriesService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
