import { Component, OnInit } from '@angular/core';

import { BasketService } from '../../services/basket/basket.service';
import { PaymentService } from '../../services/payment/payment.service';
import { BasketItem } from '../../interfaces/basket.interface';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    basket: BasketItem[] = [];
    actions: Object = {};

    constructor(private basketService: BasketService, private paymentService: PaymentService) {}

    // ----------------------------
    // Lifecycle Hooks
    // ----------------------------
    ngOnInit() {
        this.loadInitialActions();
    }

    loadInitialActions() {
        this.paymentService.getInitialActions().subscribe(actions => (this.actions = actions));
    }

    // ----------------------------
    // Get/Set functions
    // ----------------------------
    get basketTotal() {
        return this.basketService.getbasketTotal(this.basket);
    }
}
