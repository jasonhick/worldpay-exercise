export class Payment {
    constructor(
        public cvc: string,
        public type: string,
        public cardNumber: string,
        public cardHolderName: string,
        public billingAddress: BillingAddress,
        public cardExpiryDate: CardExpiryDate
    ) {}
}

export interface BillingAddress {
    address1: string;
    address2: string;
    countryCode: string;
    postalCode: string;
    state: string;
}

export interface CardExpiryDate {
    month: number;
    year: number;
}
