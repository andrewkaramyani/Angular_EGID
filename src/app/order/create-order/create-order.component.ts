import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateOrder } from 'src/Models/CreateOrder';
import { order } from 'src/Models/order';
import { stock } from 'src/Models/stock';
import { orderService } from '../../service/order-service.service';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateorderComponent implements OnInit {
selectedStock : stock;
  constructor(public ordersService : orderService,private route:Router) {
    this.ordersService.GetPersons();
    this.ordersService.refreshListStock();
   }
  ngOnInit(): void {
    // this.form.reset();
    this.ordersService.formData=new CreateOrder();
    this.ordersService.formData.quantity=1;
    //static cause of no identity 
    this.ordersService.formData.brokerID=1;
    if(this.ordersService.listStocks.length!=0)
    {
      this.ordersService.formData.stockID= this.ordersService.listStocks[0].id;
    }
    this.selectstock(0);
  }

  selectstock(index : number)
  {
    this.selectedStock= this.ordersService.listStocks[index];
    this.ordersService.formData.price=this.selectedStock.price*this.ordersService.formData.quantity;
  }
  changeQuantity()
  {
    this.ordersService.formData.price=this.selectedStock.price*this.ordersService.formData.quantity;
  }
  insertRecord(form: NgForm) {
    this.ordersService.CreateOrder().subscribe(
      res => {
        this.resetForm(form);
        this.ordersService.GetAllOrders();
        this.route.navigate(['/listorders']);
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.ordersService.formData = new CreateOrder();
  }
}
