import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket/basket.service';
import { BasketItem } from '../../interfaces/basket.interface';

@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
    basket: BasketItem[] = [];

    constructor(private basketService: BasketService) {}

    loadBasketItems() {
        this.basketService.getBasketItems().subscribe(items => (this.basket = items));
    }

    // ----------------------------
    // Get/Set functions
    // ----------------------------
    get basketTotal() {
        return this.basketService.getbasketTotal(this.basket);
    }

    // ----------------------------
    // Lifecycle Hooks
    // ----------------------------
    ngOnInit() {
        this.loadBasketItems();
    }
}
