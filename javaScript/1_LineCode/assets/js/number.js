$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Add an ordinal suffix to a number
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Add an ordinal suffix to a number</h6></div>"
    + "<div class='collapsible-body codejs'>"+ anOrdinalSuffixTo_A_Number() +"</div></li>"

    // Calculate fibonacci numbers
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Calculate fibonacci numbers</h6></div>"
    + "<div class='collapsible-body codejs'>"+ calculateFibonacciNumbers() +"</div></li>"

    // Calculate the average of arguments
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Calculate the average of arguments</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Calculate the division of arguments
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Calculate the division of arguments</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Calculate the factorial of a number
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Calculate the factorial of a number</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Calculate the mod of collection index
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Calculate the mod of collection index</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Calculate the remainder of division of arguments
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Calculate the remainder of division of arguments</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Calculate the sum of arguments
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Calculate the sum of arguments</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a given integer is a prime number
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a given integer is a prime number</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a number is a power of 2
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a number is a power of 2</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a number is even
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a number is even</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a number is negative
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a number is negative</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a number is odd
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a number is odd</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a number is positive
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a number is positive</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Clamp a number between two values
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Clamp a number between two values</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Compute the greatest common divisor between two numbers
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Compute the greatest common divisor between two numbers</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert a number to equivalent characters
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert a number to equivalent characters</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert a string to number
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert a string to number</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert degrees to radians
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert degrees to radians</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Generate a random floating point number in given range
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Generate a random floating point number in given range</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Generate a random integer in given range
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Generate a random integer in given range</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the arrays of digits from a number
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the arrays of digits from a number</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Multiply arguments
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Multiply arguments</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Prefix an integer with zeros
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Prefix an integer with zeros</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Round a number to a given number of digits
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Round a number to a given number of digits</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Subtract arguments
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Subtract arguments</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Truncate a number to a given number of decimal places without rounding
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Truncate a number to a given number of decimal places without rounding</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    + "</ul>"
    
    $('#pro_number').html(problems);

})

function anOrdinalSuffixTo_A_Number() {
    let code = "// `n` is a position number<br><code class='javascript'><span class='codejs-keyword'>let </span>"
    + "addOrdinal = n => `<span class='codejs-other'>${n}${['st', 'nd', 'rd'][((n + 90) % 100 - 10) % 10 - 1] ||"
    + "'th'}</span>`;<br><br>// Or<br><span class='codejs-keyword'>let </span>"
    + "addOrdinal = n => `<span class='codejs-other'>${n}${[, 'st', 'nd', 'rd'][/1?.$/.exec(n)] || 'th'}</span>`;"
    + "<br><br>// Or<br><span class='codejs-keyword'>let </span>"
    + "addOrdinal = n => `<span class='codejs-other'>${n}${[, 'st', 'nd', 'rd'][n % 100 >> 3^1 && n % 10] || "
    + "'th'}</span>`;<br><br>// Or<br><span class='codejs-keyword'>let </span>"
    + "addOrdinal = n => `<span class='codejs-other'>${n}${{one: 'st', two: 'nd', few: 'rd', other: 'th'}[new Intl.PluralRules('en', "
    + "{ type: 'ordinal' }).select(n)]}</span>`;<br><br>// Examples<br>"
    + "<span class='codejs-function'>addOrdinal</span>(1);      // '1st'<br>"
    + "<span class='codejs-function'>addOrdinal</span>(2);      // '2nd'<br>"
    + "<span class='codejs-function'>addOrdinal</span>(3);      // '3rd'<br>"
    + "<span class='codejs-function'>addOrdinal</span>(10);      // '10th'<br>"
    + "<span class='codejs-function'>addOrdinal</span>(11);      // '11th'<br>"
    + "<span class='codejs-function'>addOrdinal</span>(12);      // '12th'<br>"
    return code;
}

function calculateFibonacciNumbers() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "fibo = <span class='codejs-function'>(n, memo = {})</span> => memo[n] || "
    + "(n <= 2 ? 1 : (memo[n] = <span class='codejs-function'>fibo</span>(n - 1, memo) +"
    + " <span class='codejs-function'>fibo</span>(n - 2, memo)));<br><br>// Examples<br>"
    + "<span class='codejs-function'>fibo</span>(1);    // 1<br>"
    + "<span class='codejs-function'>fibo</span>(2);    // 1<br>"
    + "<span class='codejs-function'>fibo</span>(3);    // 2<br>"
    + "<span class='codejs-function'>fibo</span>(4);    // 3<br>"
    + "<span class='codejs-function'>fibo</span>(5);    // 5<br>"
    return code;
}