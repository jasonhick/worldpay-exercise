import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BasketService } from './basket.service';

describe('BasketService', () => {
    let service: BasketService;
    let url: string;
    let httpMock: HttpTestingController;
    let items;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BasketService],
            imports: [HttpClientTestingModule]
        });

        service = TestBed.get(BasketService);
        httpMock = TestBed.get(HttpTestingController);
        url = '/assets/basket.json';
        items = [
            {
                itemid: 1001,
                productid: 9001,
                name: 'The Knot Handbook',
                quantity: 1,
                price: 8.99
            }
        ];
    });

    it('should create the service', () => {
        expect(service).toBeTruthy();
    });

    it('should return data', () => {
        service.getBasketItems().subscribe(results => {
            expect(results).toBeDefined();
            expect(results.length).toBe(1);
            expect(results).toEqual(items);
        });

        const request = httpMock.expectOne(url);
        expect(request.request.method).toEqual('GET');
        request.flush(items);
        httpMock.verify();
    });
});
