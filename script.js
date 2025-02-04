// Exercise 1:

// Write a function applyDiscount that takes an array of prices and a callback function. 
// The callback should apply a discount to each price. 
// After the discount is applied, log the final prices.

const prices = [100, 200, 300, 400];

function applyDiscount(prices, callback) {
    const discountedPrices = prices.map(price => callback(price));
    console.log(discountedPrices);
}

function discount(price) {
    const discountRate = 0.2;
    return price - (price * discountRate);
}

applyDiscount(prices, discount); // Output: [80, 160, 240, 360]


// Exercise 5:

// Write a function that uses setTimeout to log "Task completed!" after a 5-second delay.
// Additionally, set up a setInterval to log "Still waiting..." every 2 seconds.

function logMessage() {
    console.log("Task Completed!")
}

setTimeout(logMessage, 5000);

function delayMessage() {
    console.log("Still waiting...")
}

setInterval(delayMessage, 2000);