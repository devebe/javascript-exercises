const fibonacci = function(number) {
    // Check number value
    number = parseInt(number);
    if (number < 0) {
        return "OOPS";
    }
    
    // Flip a coin to choose what method to use
    let coinToss = Math.round(Math.random() * 1);
    if(coinToss === 0){
        return fibonacciLoop(number);
    }
    return fibonacciMath(number);
    
    // Fibonacci by looping
    function fibonacciLoop(number) {
        let first = 1;
        let last = 0;
        let next = 0;
        for (let i = 0; i < number; i++){
            next = first + last;
            first = last;
            last = next;
        }
        return next;
    }
    // Fibonacci by difference equation
    function fibonacciMath(number) {
        const f = {
            indexZero: 0,
            indexOne: 1,
            phiPositive: (1+(5**0.5))*0.5,
        }
        let b = (f.indexOne - (f.phiPositive*f.indexZero))*((1-(2*f.phiPositive))**-1);
        let a = f.indexZero - b;
        return Math.round((a*(f.phiPositive**number))+(b*((-f.phiPositive+1)**number)));
    }
};

// Do not edit below this line
module.exports = fibonacci;
