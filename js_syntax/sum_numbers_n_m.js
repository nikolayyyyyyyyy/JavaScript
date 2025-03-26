function solve(first,secont){
    const n = Number(first);
    const m = Number(secont);

    let res = 0;
    for (let i = n; i <= m; i++) {
        
        res += i;
    }

    return res;
}


console.log(solve('1','5'));