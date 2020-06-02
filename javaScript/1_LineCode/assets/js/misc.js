$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Check if a value is a number
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if a value is a number</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_A_ValueIs_A_number() +"</div></li>"

    // Check if a value is a regular expression
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if a value is a regular expression</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_A_ValueIs_A_RegularExpression() +"</div></li>"

    // Check if a value is nil
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if a value is nil</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if an object is a promise
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if an object is a promise</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if the code is running in node js
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if the code is running in node js</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if the code is running in the browser
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if the code is running in the browser</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert celsius to fahrenheit
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Convert celsius to fahrenheit</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert hex to rgb
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Convert hex to rgb</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert rgb color to hex
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Convert rgb color to hex</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Decode a jwt token
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Decode a jwt token</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Detect dark mode
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Detect dark mode</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Easing functions
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Easing functions</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Emulate a dice throw
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Emulate a dice throw</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Encode a url
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Encode a url</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Generate a random boolean
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Generate a random boolean</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Generate a random hex color
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Generate a random hex color</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Generate a random uuid
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Generate a random uuid</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the value of a cookie
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get the value of a cookie</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the value of a param from an url
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get the value of a param from an url</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Redirect the page to https if it is in http
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Redirect the page to https if it is in http</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Run promises in sequence
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Run promises in sequence</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Swap two variables
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Swap two variables</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Wait for an amount of time
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Wait for an amount of time</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    + "</ul>"
    
    $('#pro_misc').html(problems);

})
function if_A_ValueIs_A_number() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isNumber = value => !<span class='codejs-defMethod'>isNaN</span>(parseFloat(value)) "
    + "&& <span class='codejs-defMethod'>isFinite</span>(value);"
    return code;
}

function if_A_ValueIs_A_RegularExpression() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isRegExp = value => <span class='codejs-keyword'>Object</span>.prototype.toString."
    + "<span class='codejs-defMethod'>call</span>(value) === '<span class='codejs-defMethod'>[object RegExp]</span>';"
    return code;
}