

// Here, we create our main function.
function fizzbuzz() {
    
    for (let n = 1; n <= 100; n++) {
        console.log(mapNumber(n));
    }
}

function mapNumber(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    }
    if (n % 3 === 0) {
        return 'Fizz';
    }
    if (n % 5 === 0) {
        return 'Buzz';
    }
    return n;
}

// Now we run the main function...
fizzbuzz();
