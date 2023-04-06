package main

import (
	"testing"
	"time"
)

func TestCalculateFee(t *testing.T) {
	var userType = 0             // TODO: Initialize to an appropriate value
	var itemType = 0             // TODO: Initialize to an appropriate value
	var itemPrice = 0            // TODO: Initialize to an appropriate value
	var itemEndDate = time.Now() // TODO: Initialize to an appropriate value
	var expected = 0             // TODO: Initialize to an appropriate value
	actual, _ := calculateFee(userType, itemType, itemPrice, itemEndDate)

	if expected != actual {
		t.Fatalf("Expected %v but got %v", expected, actual)
	}
}
