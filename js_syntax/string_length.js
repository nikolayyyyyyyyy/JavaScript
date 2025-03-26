function solve(first,second,third){
    let sumLength = 0;

    sumLength += first.length;
    sumLength += second.length;
    sumLength += third.length;

    console.log(sumLength);
    console.log(Math.floor(sumLength/3));
}


solve('chocolate', 'ice cream', 'cake');