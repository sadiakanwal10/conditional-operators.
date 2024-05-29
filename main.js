"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let isBookAvailable = true;
let userBorrowedBooks = 2;
let maxAllowedBooks = 3;
if (isBookAvailable && userBorrowedBooks < maxAllowedBooks) {
    console.log("AP BOOK BORROW KR SAKHTY HAIN");
}
else {
    console.log("AP BOOK BORROW NAHI KR SAKHTY");
}
let isCreditCardPaymentOptionAvailable = false;
let costOfItemPurchasing = 5000;
let amountInCreditCard = 9000;
if (isCreditCardPaymentOptionAvailable || costOfItemPurchasing < amountInCreditCard) {
    console.log("ap item purchase kr sakhty hain");
}
else {
    console.log("ap item purchase nae krsakhty");
}
