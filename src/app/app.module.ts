import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { orderService } from './service/order-service.service';
import { ListordersComponent } from './order/list-orders/list-orders.component';
import { CreateorderComponent } from './order/create-order/create-order.component';
import { ListStocksComponent } from './list-stocks/list-stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    ListordersComponent,
    CreateorderComponent,
    ListStocksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    orderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
