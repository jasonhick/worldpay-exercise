# Worldpay Exercise

## Assigment

Your customer is an E-Commerce merchant. They require a UI that will enable their shoppers to purchase goods and cancel those purchases.
You are required to create a simple UI that allows a shopper to Authorize and optionally Cancel a payment using the Access Worldpay API's - https://beta.developer.worldpay.com/docs/access-worldpay; see Take a Payment for more details - https://beta.developer.worldpay.com/docs/access-worldpay/payments/take-a-payment.
Additionally you can implement other flows such as settling a payment and refunds.

## Solution

The solution is a fake store called 'Salty Sea Dogs'! It allows a shopper to view a basket and then proceed to the checkout to pay for the items. All API responses have been stubbed/mocked using GET. In a real world situation these would be POSTS, and calls to the API would be authenticated using the relevant credentials.

I have assumed the view point of a shopper, not a merchant. Other payment flows such as Cancel, Refund, Settle have not been implemented.

Unit Tests are simple ones that check the existence of the component/service.
There is a more in depth test for the BasketService which mocks a HTTP response.

This example is super simple and as such is not suitable for a production environment.

#### Notes

-   The only views implemented are the basket, payment and success components.
-   The basket is pre-populated with 3 items loaded from a local JSON file in the assets folder
-   Interactions with the Worldpay API have been stubbed.
-   Stubbed json responses are in the assets folder wpAccess & wpResponse

-   This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.
-   Code was formatted using Prettier
-   CSS Framework used is Bulma.io

## Installation

-   Clone this repository onto your computer
-   Run `npm install` from the root directory of the app
-   Run `ng serve` to build and run the site
-   Navigate to `http://localhost:4200/`.

## Running unit tests

-   Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
