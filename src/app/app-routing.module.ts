import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListordersComponent } from './order/list-orders/list-orders.component';
import { CreateorderComponent } from './order/create-order/create-order.component';
import { ListStocksComponent } from './list-stocks/list-stocks.component';


const routes: Routes = [
  {path:"", redirectTo: "/liststocks", pathMatch:'full'},
 {path:"listorders" , component : ListordersComponent},
 {path:"create", component : CreateorderComponent},
 {path:"liststocks", component : ListStocksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
