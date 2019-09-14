'use strict'
let basicPlan = 50
let dataConsumed = 12400
let price = 0

if (dataConsumed <= 5000) {
  price = basicPlan
} else if (dataConsumed > 5000 && dataConsumed <= 10000) {
  price = basicPlan + 0.05
} else {
  price = basicPlan + 0.1
}

console.log('Your monthly pay is ' + ' ' + price)
