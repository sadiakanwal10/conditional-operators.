"use strict";
let discountAvailableOnCreditTerms = true;
let maxAllowedTimeInDays = 30;
let customerMadePaymentInDays = 28;
if (discountAvailableOnCreditTerms && customerMadePaymentInDays < maxAllowedTimeInDays) {
    console.log("you are eligible for discount");
}
else {
    console.log("you are not eligible for discount");
}
let overdraftOptionAvailable = true;
let limitOfOverdraftByBank = 50000;
let costOfItemPurchasing = 60000;
if (overdraftOptionAvailable || costOfItemPurchasing < limitOfOverdraftByBank) {
    console.log("you are eligible to purchase this item");
}
else {
    ("you are not eligible to purchase this item");
}
