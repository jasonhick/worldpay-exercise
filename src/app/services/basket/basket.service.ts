import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BasketItem } from '../../interfaces/basket.interface';

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    constructor(private http: HttpClient) {}

    /**
     * [getBasketItems description]
     * @return [description]
     */
    getBasketItems() {
        return this.http.get<BasketItem[]>('/assets/basket.json');
    }

    /**
     * [getbasketTotal description]
     * @param  items [description]
     * @return       [description]
     */
    getbasketTotal(items: BasketItem[]) {
        return items.reduce((acc, current) => {
            return acc + current.quantity * current.price;
        }, 0);
    }
}