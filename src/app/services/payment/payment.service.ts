import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Payment } from '../../models/payment.class';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    entryPoint = 'assets/wpAccess.json';
    paymentResponse = 'assets/wpResponse.json';

    constructor(private http: HttpClient) {}

    getInitialActions() {
        return this.http.get(this.entryPoint);
    }

    authorizePayment(authorizeUrl: string, payment: Payment): Observable<any> {
        // normal functionality would post the payment details to the authorize url
        // return this.http.post(this.authorizeUrl, payment, headers);
        return this.http.get(this.paymentResponse);
    }
}
