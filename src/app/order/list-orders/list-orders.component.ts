import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from '../../../Models/order';
import { orderService } from '../../service/order-service.service';



@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListordersComponent implements OnInit {
  constructor(public ordersService : orderService,private route:Router) 
  {
    this.ordersService.GetAllOrders();
  }

  ngOnInit(): void {
  }
}
