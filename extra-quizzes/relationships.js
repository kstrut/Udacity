function getRelationship(x, y) {
    // Your code goes here!
    if (x == undefined || y == undefined) {return "You need to enter in two values."}
    else if (isNaN(x) || isNaN(y)) {
        if (isNaN(x) && isNaN(y)) {
            return "Can't compare relationships because " + x + " and " + y + " are not numbers.";
        }
        else if (isNaN(x)) {
            return "Can't compare relationships because " + x + " is not a number.";
        }
        else if (isNaN(y)) {
            return "Can't compare relationships because " + y + " is not a number.";
        }
    }
    else if (x > y) {
        return x + " is greater than " + y;
    }
    else if (y > x) {
        return y + " is greater than " + x;
    }
    else if (y == x) {
        return x + " is equal to " + x;
    }
    else return "I messed up";
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));