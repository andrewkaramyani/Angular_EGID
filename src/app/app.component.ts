import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { orderService } from './service/order-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EGID';
  subscription !: Subscription;
  constructor(public ordersService : orderService,private route:Router) 
  {
  }
  ngOnInit(): void {
    // timer(0, 10000) call the function immediately and every 10 seconds 
    this.subscription = timer(0, 10000).pipe( 
      map(() => { 
        this.ordersService.UpdateStocks(); 
        this.ordersService.refreshListStock()
      }) 
    ).subscribe(); 
}
  ngOnDestroy(): void { 
    this.subscription.unsubscribe(); 
  }
}
