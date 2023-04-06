package com.grafanalabs;

import java.time.LocalDate;

/**
 * SolidFeeCalculator
 *
 */
public class App {
    public static void main( String[] args ) {
        int fee = 0;

        try {
            fee = CalculateFee(1, 0, 100, LocalDate.now());
        }
        catch (Exception exception) {
            throw new RuntimeException();
        }

        System.out.println(new Integer(fee).toString());
    }

    /**
     *   This function handles all calculation you ever need!
     * 
     * @param usertype 0= Normal, 1 = Company
     * @param itemtype 0= Auction, 1 = BuyItNow
     * @param itemprice
     * @param itemenddateTime Item ends
     * @return calculated fee
     */ 
    public static int CalculateFee(int usertype, int itemtype, int itemprice,  LocalDate itemenddate) {
        try {
            switch (usertype) {
                case 0: //Normal
                    //region Normal user
                    if (itemtype == 0) { //Auction
                        int enddateDiscount = 0;
                        if (itemenddate.compareTo(LocalDate.now()) == 0) enddateDiscount = 10;

                        return itemprice + 25 - enddateDiscount;
                    } else if (itemtype == 1) { //BuyItNow
                        return itemprice + 35 - 0;
                    }
                    break; 
                    //endregion
                case 1: //Company
                    //region Company
                    if (itemtype == 0) { //Auction
                        if (itemenddate.equals(LocalDate.now())) {
                            return itemprice + 25 - 15;// Enddate discount and company discount
                        }

                        return itemprice + 25 - 5;// Only company discount
                    } else if (itemtype == 1) { //BuyItNow
                        return itemprice + 35 - 5;
                    }
                    break; 
                    //endregion
            }
        } catch (Exception exception) {
            System.out.println(exception.getMessage());
        }

        return 0;
    }
}
