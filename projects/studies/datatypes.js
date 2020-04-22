/* Datatypes are what and how memory values are stored running an app. Anything
 * from a number to a list of objects are considered datatypes.
 * 
 * Datatypes come in two forms, simple and complex.
 * 
 * Simple datatypes can only contain its own value, and is immutable, or
 * unchangable, without the use of operands or non-function processes.
 * Complex datatypes can contain more than one value, and is mutable.
 *
 *
 *
 * Simple Datatypes include:
 * - Number
 * - Boolean
 * - String
 * - undefined
 *
 * Complex Datatypes include:
 * - Array
 * - Object
 * - null
 * - Functions
 *
 *
 * - Numbers are the second most basic values a computer can understand. There 
 *   isn't much to talk about that isn't simply common knowledge about numbers, 
 *   but the interactions between other simple datatypes can prove interesting.
 *   - Numbers are the only mathematical datatype; where Python has Integer,
 *     Float, and Imaginary, JS simply has...Number. That said, you can write
 *   - any numerical value, whether an integer, decimal, or exponential notation
 *     freely, the interpretor will understand it.
 *
 *     Examples:
 */
 
var x = 50;
var x = 3.142;
var x = 1.27e5; // 127,000

/*
 *   - Numbers can of course be subjected to operands, allowing you to do math
 *     with them within your code. This is further helped by the native Math
 *     object, which contains options for more complex math.
 *    
 * - Booleans are of two possible values: true, and false. Significantly simpler
 *   than numbers. To be pedantic, all computers break their processes down to
 *   binary code if you dig deep enough, and booleans are a datatyped version of
 *   that. False would be equal to 0, and True equal to 1 in binary.
 *
 *   Examples:
 */ 
 
var t = true;
if (t) {
  console.log(t);
} // This would log "true" to console, since t is bound to a true bool.

var f = false;
if (f) {
  console.log(f);
} // Nothing happens here, though, since if statements need a truth, but f
  // isn't truthy.
  
/*
 * - Strings are a simple datatype that holds a text value, similar to what you'd
 *   see if you opened up Notepad and started typing. They can be added to using
 *   addition operands, or the .concat() method.
 *   - Strings can be of nearly endless length, as long as there is the memory
 *     in the machine to run it.
 *
 *   Examples:
 */

var str = "I'm a string! Not cheese!";
var first = "Corbin";
var last = "Callais";
var full = first + " " + last; // "Corbin Callais"
var full2 = first.concat(" ", last); // Also "Corbin Callais"

/*
 * - undefined is less a datatype, and more of a lack of one. It's considered a
 *   placeholder for objects in memory, such as variables, that haven't been
 *   assigned a proper value yet. This keeps the object in memory, allowing it
 *   to be reassigned later. 
 *   - undefined cannot be used for anything except placeholding, as operands
 *     don't work, and there's no methods attached to it. That said, it makes
 *     more than a few situations significantly less difficult, such as leaving
 *     a variable open for dynamic value changing.
 * Examples:
 */

var z; // Automatically set to undefined
z = 20; // This works because undefined is keeping it in memory, despite not
        // being manually assigned to anything.
var undef = undefined; // Could also just set it yourself, it changes nothing

/*
 * - Arrays are 
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */