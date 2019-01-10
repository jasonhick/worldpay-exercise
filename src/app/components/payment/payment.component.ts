import { Component, OnInit } from '@angular/core';

import { BasketService } from '../../services/basket/basket.service';
import { PaymentService } from '../../services/payment/payment.service';
import { BasketItem } from '../../models/basket.interface';
import { Payment } from '../../models/payment.class';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    basket: BasketItem[] = [];
    actions: Object = {};
    payment: Payment;

    constructor(private basketService: BasketService, private paymentService: PaymentService) {}

    // ----------------------------
    // Lifecycle Hooks
    // ----------------------------
    ngOnInit() {
        this.loadInitialActions();
        this.setDummyData();
        console.log(this.payment);
    }

    // ----------------------------
    // Component functions
    // ----------------------------
    loadInitialActions() {
        this.paymentService.getInitialActions().subscribe(actions => (this.actions = actions));
    }

    setDummyData() {
        this.payment = new Payment(
            '666',
            'card/plain',
            '4444333322221111',
            'Jason Hick',
            {
                address1: '10 Downing Street',
                address2: 'London',
                countryCode: 'GB',
                postalCode: 'SW1A 2AA',
                state: 'Kent'
            },
            { month: 10, year: 12 }
        );
    }

    // ----------------------------
    // Get/Set functions
    // ----------------------------
    get basketTotal() {
        return this.basketService.getbasketTotal(this.basket);
    }

    get diagnostic() {
        return this.payment;
    }
}
