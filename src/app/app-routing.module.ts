import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketComponent } from './components/basket/basket.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'basket',
        pathMatch: 'full'
    },
    {
        path: 'basket',
        component: BasketComponent
    },
    {
        path: 'payment',
        component: PaymentComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
