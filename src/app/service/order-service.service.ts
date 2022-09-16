import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { order } from '../../Models/order';
import { stock } from '../../Models/stock';
import { person } from 'src/Models/person';
import { CreateOrder } from 'src/Models/CreateOrder';

@Injectable({
  providedIn: 'root'
})
export class orderService {

  readonly BaseUrl="https://localhost:44386/" ;
  brokerId=1;
  listorders: order[];
  listStocks: stock[];
  persons: person[];
  formData: CreateOrder = new CreateOrder();
  constructor(private http: HttpClient ,private route:Router) { }


  GetAllOrders() 
  {
    this.http.get(this.BaseUrl+"stock/GetAllOrders")
    .toPromise()
    .then(res =>this.listorders = res as order[]);
  // return this.http.get<order>(this.BaseUrl+"stock/GetAllOrders/").toPromise()
  // .then(res=>{
  //   this.formData=res as order;
  //   this.route.navigate(['/edit']);
  // });
  }
  GetPersons() 
  {
    this.http.get(this.BaseUrl+"stock/GetPersons?brokerId="+this.brokerId)
    .toPromise()
    .then(res =>this.persons = res as person[]);
  }
  CreateOrder() {
            return this.http.post(this.BaseUrl+"stock/CreateOrder", this.formData);
  }
    refreshListStock() {
      this.http.get(this.BaseUrl+"stock/GetStocks")
        .toPromise()
        .then(res =>this.listStocks = res as stock[]);
    }
    UpdateStocks()
    {
      this.http.get(this.BaseUrl+"stock/UpdateStocks")
      .toPromise()
    }
}



