let discountAvailableOnCreditTerms:boolean = true
let maxAllowedTimeInDays:number = 30
let customerMadePaymentInDays:number =28
if (discountAvailableOnCreditTerms && customerMadePaymentInDays<maxAllowedTimeInDays)
     {console.log("you are eligible for discount");
    
} else {console.log("you are not eligible for discount");
    
}

let overdraftOptionAvailable:boolean = true
let limitOfOverdraftByBank:number = 50000
let costOfItemPurchasing:number = 60000
if (overdraftOptionAvailable || costOfItemPurchasing<limitOfOverdraftByBank) 
    {console.log("you are eligible to purchase this item");
    
} else {("you are not eligible to purchase this item");
    
}
    

    
