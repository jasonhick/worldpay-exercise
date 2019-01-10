import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    entryPoint: string = 'assets/wpAccess.json';

    constructor(private http: HttpClient) {}

    // Stub response from https://try.access.worldpay.com/
    getInitialActions() {
        return this.http.get(this.entryPoint);
    }
}
