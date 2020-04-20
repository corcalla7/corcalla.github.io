// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    // We make a counter, and run through the length of the string, returning
    // what we have at the end.
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        count = count + 1;
    }
    return count;
    // YOUR CODE ABOVE HERE //
    // Or y'know, we could just return string.length, but I guess that would be
    // too easy.
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // This is a little more complex, as it requires basic knowledge of 
    // charcodes.
    
    // First, make an array by splitting every single character from each other,
    // so "Yes" would become ["Y", "e", "s"]. The empty "" in the parenths are
    // crucial to make it that way.
    const letters = string.split("");

    // Now we make a loop to run through every element in the array.
    for (let letter = 0; letter < letters.length; letter++) {
        const char = letters[letter];
        const charcode = char.charCodeAt(0);
        // In here, we then check if the letter is between capital A and Z.
        // The interpretor will read strings in comperisons by a summated
        // ASCII id.
        if (charcode >= 65 && charcode <= 90) {
            // The line below grabs the current charcode of the capital letter,
            // adds 32 so it is the lowercase equivalent, and puts it back into
            // string form before resolving it as the new value of the current
            // iteration.
            letters[letter] = String.fromCharCode(char.charCodeAt(0) + 32);
        }
    }
    // We still have to return something, so we take the revised array and slap
    // it back together as a string with the .join() method.
    const final = letters.join("");
    // Then return that.
    return final;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // Well this is the same thing as toLowerCase, but in reverse order, so
    // all pseudocode there applies here, but instead of lowercasing capitals,
    // we're capitalizing lowercases.
    const letters = string.split("");

    for (let letter = 0; letter < letters.length; letter++) {
        const char = letters[letter];
        const charcode = char.charCodeAt(0);
        if (charcode >= 97 && charcode <= 123) {
            // A minus here, not a plus, because we want to make a lowercase
            // capitalized, and capitals come first in ASCII
            letters[letter] = String.fromCharCode(char.charCodeAt(0) - 32);
        }
    }
    const final = letters.join("");
    // Then return that.
    return final;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // Dash case is toLowerCase but with all spaces replaced by dashes.
    // So run the string through our toLowerCase function, and immediately split
    // into an array
    const lowered = toLowerCase(string).split("");
    // Now to run through the array...
    for (let i = 0; i < lowered.length; i++) {
        const letter = lowered[i];
        // Check if each character is a space, and if so, change it to a dash.
        if (letter === ' ') {
            lowered[i] = '-';
        }
    }
    const final = lowered.join("");
    return final;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // We'll start by making sure the string and char are on the same level.
    // We'll make them lowercased so casing is irrelevant.
    const loweredStr = toLowerCase(string), loweredChar = toLowerCase(char);
    // Now we can compare them and returnn a boolean based on that.
    if (loweredStr[0] === loweredChar) {
        return true;
    } else {
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // This is mostly the same as beginsWith, just on the other side of the
    // string.
    const loweredStr = toLowerCase(string), loweredChar = toLowerCase(char);
    // Now we can compare them and returnn a boolean based on that.
    if (loweredStr[loweredStr.length - 1] === loweredChar) {
        return true;
    } else {
        return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    return stringOne + stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    return args.join("");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    const len1 = stringOne.length, len2 = stringTwo.length;
    if (len1 > len2) {
        return stringOne;
    } else {
        return stringTwo;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // This one will be a bit more fun. We could just stop at the first letter,
    // but that isn't at all how alphabetical order works.
    
    // We start by finding the shorter. This will go into 2 variables, 
    // shorterStr and returnVal. shorterStr is obvious, but returnVal will be
    // the returnVal in case the loop ends without returning anything,
    let shorterStr, returnVal;
    
    if (stringOne.length < stringTwo.length) {
        shorterStr = stringOne;
        returnVal = 1;
    } else if (stringOne.length > stringTwo.length) {
        shorterStr = stringTwo;
        returnVal = -1;
    } else {
        shorterStr = stringOne;
        returnVal = 0;
    }
    console.log(shorterStr, returnVal);
    // We start by running through the first string.
    for (let ltr = 0; ltr < shorterStr.length; ltr++) {
        // And compare the first letter of a to b, so on.
        const char1 = stringOne[ltr], char2 = stringTwo[ltr];
        console.log(`CHARS ::: ${char1}, ${char2}`);
        // If its charcode is less, then returns 1, if more, -1. If it's equal,
        // nothing happens until either a return statement hits or the loop is
        // over.
        if (char1 < char2) {
            return 1;
        } else if (char1 > char2) {
            return -1;
        }
    }
    return returnVal;
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // Again, same thing as sortAscending, but in the other direction.
    
    let shorterStr, returnVal;
    
    if (stringOne.length < stringTwo.length) {
        shorterStr = stringOne;
        returnVal = -1;
    } else if (stringOne.length > stringTwo.length) {
        shorterStr = stringTwo;
        returnVal = 1;
    } else {
        shorterStr = stringOne;
        returnVal = 0;
    }
    console.log(shorterStr, returnVal);
    // We start by running through the first string.
    for (let ltr = 0; ltr < shorterStr.length; ltr++) {
        // And compare the first letter of a to b, so on.
        const char1 = stringOne[ltr], char2 = stringTwo[ltr];
        console.log(`CHARS ::: ${char1}, ${char2}`);
        // If its charcode is less, then returns 1, if more, -1. If it's equal,
        // nothing happens until either a return statement hits or the loop is
        // over.
        if (char1 < char2) {
            return -1;
        } else if (char1 > char2) {
            return 1;
        }
    }
    return returnVal;



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
