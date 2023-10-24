const factorial = n => 
    Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);


