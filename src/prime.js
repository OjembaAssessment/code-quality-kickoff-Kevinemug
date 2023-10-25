const isPrime = (num, divisor = 2) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % divisor === 0) return false;
    if (divisor * divisor > num) return true;
    return isPrime(num, divisor + 1);
};
