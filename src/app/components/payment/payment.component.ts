import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
    actions = {};
    payment: Payment;

    constructor(private basketService: BasketService, private paymentService: PaymentService) {}

    // ----------------------------
    // Lifecycle Hooks
    // ----------------------------
    ngOnInit() {
        this.loadInitialActions();
        this.loadPaymentFormData();
    }

    // ----------------------------
    // Component functions
    // ----------------------------
    loadInitialActions() {
        this.paymentService.getInitialActions().subscribe(actions => (this.actions = actions));
    }

    loadPaymentFormData() {
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

    onSubmit() {
        const authorizeUrl = this.actions['_links']['payments:authorize'].href;
        this.paymentService.authorizePayment(authorizeUrl, this.payment).subscribe(data => {
            if (data.outcome === 'authorized') {
                console.log('PAYMENT WAS SUCCESSFUL');
                // Next: redirect to successful page
            }
        });
    }

    // ----------------------------
    // Get/Set functions
    // ----------------------------
    get basketTotal() {
        return this.basketService.getbasketTotal(this.basket);
    }
}
