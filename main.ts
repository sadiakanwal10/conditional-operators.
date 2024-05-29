import { Console } from "console";

let isBookAvailable:boolean = true
let userBorrowedBooks:number = 2
let maxAllowedBooks:number = 3
if (isBookAvailable && userBorrowedBooks<maxAllowedBooks) {console.log("AP BOOK BORROW KR SAKHTY HAIN");} else 
{console.log("AP BOOK BORROW NAHI KR SAKHTY");}    

let isCreditCardPaymentOptionAvailable:boolean = false
let costOfItemPurchasing:number = 5000
let amountInCreditCard:number = 9000
if (isCreditCardPaymentOptionAvailable || costOfItemPurchasing<amountInCreditCard) 
    {console.log("ap item purchase kr sakhty hain");
    
} else {console.log("ap item purchase nae krsakhty");
    
}
    
