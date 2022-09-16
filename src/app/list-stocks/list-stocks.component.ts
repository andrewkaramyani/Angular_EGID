import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { orderService } from '../service/order-service.service';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-list-stocks',
  templateUrl: './list-stocks.component.html',
  styleUrls: ['./list-stocks.component.css']
})
export class ListStocksComponent implements OnInit {
  constructor(public ordersService : orderService,private route:Router) 
  {
    this.ordersService.refreshListStock();
  }

  ngOnInit(): void {
  }
ngOnDestroy(): void { 
}
}
