function solve(first,second,operation){
    switch(operation){
        case '+': return first + second;
        case '-': return first - second;
        case '*': return first * second;
        case '/': return first / second;
        case '%': return first % second;
        case '**': return first ** second;
    }
}

console.log(solve(5, 6, '+'));