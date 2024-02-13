//1
function degree(num1, num2) {
    let result = 1;
    let i;
    for ( i = 0; i < num2; i++) {
        result *= num1;
    }
    return result;
}

let result =  degree(3, 4);
alert(result);

//2
function divider(num3, num4) {
    while (num4 !== 0) {
        let num5 = num4;
        num4 = num3 % num4;
        num3 = num5;
    }
    return num3;
}

let rez = divider(52, 12);
alert(rez);


//3
function bignumeric(numeric) {
    let B = 0;
    while (numeric > 0) {
        let figure = numeric % 10;
        if (figure > B) {
            B = figure;
        }
        numeric = (numeric - figure) / 10;
    }
    return B;
}
let result1 = bignumeric(112277335); 
alert(result1);

//4
function numbercheck(operand) {
    if (operand <= 1) {
        return false;
    }
    if (operand <= 3) {
        return true;
    }
    if (operand % 2 === 0 || operand % 3 === 0) {
        return false;
    }
    let num6 = 5;
    while (num6 * num6 <= operand) {
        if (operand % num6 === 0 || operand % (num6 + 2) === 0) {
            return false;
        }
        num6 += 6;
    }
    return true;
}

let result2 = numbercheck(-3); 
alert(result2);



//5
function multipliers(num8, num9 = 2) {
    if (num8 <= 1) {
        return [];
    }
    const Dil = num9 * num9;
    for (; num9 <= Dil; num9++) {
        if (num8 % num9 === 0) {
            return [num9, ...multipliers(num8 / num9, num9)];
        }
    }
    return [num8];
}

let Result = multipliers(18); 
alert(Result);



//6
function NumbersFibonacci(f, memo = {}) {
    if (f <= 1) {
        return f;
    }
    if (memo[f]) {
        return memo[f];
    }
    memo[f] = NumbersFibonacci(f - 1, memo) + NumbersFibonacci(f - 2, memo);
    return memo[f];
}

let ResultF = NumbersFibonacci(6);
alert(ResultF);





