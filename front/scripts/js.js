function createCounter() {
    let counter = 0;
    return {
        increment: function() {
            counter++
        },
        print: function() {
            console.log(counter);
        },
    }
}
const myCounter = createCounter()
myCounter.increment();
myCounter.print();