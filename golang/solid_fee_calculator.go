package main

import (
	"fmt"
	"time"
)

func main() {
	fee, _ := calculateFee(1, 0, 100, time.Now())
	fmt.Print(fee)
}

// This function handles all calculation you ever need!
// usertype: 0= Normal, 1 = Company
// itemtype: 0= Auction, 1 = BuyItNow
// itemprice: price of item
// itemenddate: time item ends
func calculateFee(usertype int, itemtype int, itemprice int, itemenddate time.Time) (int, error) {
	if usertype == 0 { // Normal
		if itemtype == 0 { //Auction
			var enddateDiscount = 0
			if itemenddate.Year() == time.Now().Year() && itemenddate.Month() == time.Now().Month() && itemenddate.Day() == time.Now().Day() {
				enddateDiscount = 10
			}
			return itemprice + 25 - enddateDiscount, nil
		} else if itemtype == 1 { //BuyItNow
			return itemprice + 35 - 0, nil
		}
	} else if usertype == 1 { // Company
		if itemtype == 0 { //Auction
			if itemenddate.Year() == time.Now().Year() && itemenddate.Month() == time.Now().Month() && itemenddate.Day() == time.Now().Day() {
				return itemprice + 25 - 15, nil // Enddate discount and company discount
			}
			return itemprice + 25 - 5, nil // Only company discount
		} else if itemtype == 1 { //BuyItNow
			return itemprice + 35 - 5, nil
		}
	}

	return 0, fmt.Errorf("Something with the input isn't right here!")
}
