function fibonacci(num) {
    if (num === 1) return 0;
    if (num === 2) return 1;

    let a = 0, b = 1;
    for (let i = 3; i <= num; i++) {
        const next = a + b;
        a = b;
        b = next;
    }
    return b;
}
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
console.log(fibonacci(10)); // Output: 34
