'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 12,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '20:00',
    address,
  }) {
    console.log(`order Received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};

// logical operators use any data types, return any data type and
//do short circuiting. if the first value is a truthy value them OR operator will
//return the first value

console.log('---- OR ----');

console.log(10 || 'Noman');
console.log('' || 'Noman');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || '' || 0 || 'Noman' || 67 || null);

//restaurant.numguest = 23;
const guest1 = restaurant.numguest ? restaurant.numguest : 20;
console.log(guest1);

const guest2 = restaurant.numguest || 10;
console.log(guest2);

console.log('----AND----');
// in short- circuiting and operator is totally opposite to OR operator

console.log(0 && 'Noman');
console.log('Noman' && '');
console.log(undefined && null);
console.log(5 && 'maryam');
console.log('hello' && 23 && null && 'Noman');

// example

if (restaurant.orderPizza) {
  restaurant.orderPizza('onion', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('onion', 'spinach');
