import moment from 'moment';
import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  it('can calculate fee for Normal user and Auction item', () => {
    const endDateToday = moment().format('YYYY-MM-DD');
    const endDateTomorrow = moment().add(1, 'days').format('YYYY-MM-DD');

    // Test with end date today
    let fee = calc.getFee({
      userType: 0,
      itemType: 0,
      price: 10,
      endDate: endDateToday,
    });
    expect(fee).toBe(25); // price + 25 - 10 (end date discount)

    // Test with end date tomorrow
    fee = calc.getFee({
      userType: 0,
      itemType: 0,
      price: 10,
      endDate: endDateTomorrow,
    });
    expect(fee).toBe(35); // price + 25 - 0 (no end date discount)

    // Test with invalid item type
    fee = calc.getFee({
      userType: 0,
      itemType: 2,
      price: 10,
      endDate: endDateToday,
    })
    expect(fee).toBeUndefined();
  });

  it('can calculate fee for Normal user and BuyItNow item', () => {
    const fee = calc.getFee({
      userType: 0,
      itemType: 1,
      price: 10,
      endDate: moment().format('YYYY-MM-DD'),
    });
    expect(fee).toBe(45); // price + 35 - 0 (no discount)
  });

  it('can calculate fee for Company user and Auction item', () => {
    const endDateToday = moment().format('YYYY-MM-DD');
    const endDateTomorrow = moment().add(1, 'days').format('YYYY-MM-DD');

    // Test with end date today
    let fee = calc.getFee({
      userType: 1,
      itemType: 0,
      price: 10,
      endDate: endDateToday,
    });
    expect(fee).toBe(20); // price + 25 - 5 (company discount)

    // Test with end date tomorrow
    fee = calc.getFee({
      userType: 1,
      itemType: 0,
      price: 10,
      endDate: endDateTomorrow,
    });
    expect(fee).toBe(30); // price + 25 - 15 (end date and company discount)

    // Test with invalid item type
    fee = calc.getFee({
      userType: 1,
      itemType: 2,
      price: 10,
      endDate: endDateToday,
    })
    expect(fee).toBeUndefined();
  });

  it('can calculate fee for Company user and BuyItNow item', () => {
    const fee = calc.getFee({
      userType: 1,
      itemType: 1,
      price: 10,
      endDate: moment().format('YYYY-MM-DD'),
    });
    expect(fee).toBe(40); // price + 35 - 5 (company discount)
  });

  it('throws an error for unknown user type', () => {
    expect(() =>
      calc.getFee({
        userType: 2,
        itemType: 0,
        price: 10,
        endDate: moment().format('YYYY-MM-DD'),
      })
    ).toThrow('Unknown user type');
  });
});
