import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BasketItem } from '../../models/basket.interface';

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    constructor(private http: HttpClient) {}

    getBasketItems(): Observable<any> {
        return this.http.get<BasketItem[]>('/assets/basket.json');
    }

    getbasketTotal(items: BasketItem[]) {
        return items.reduce((acc, current) => {
            return acc + current.quantity * current.price;
        }, 0);
    }
}
