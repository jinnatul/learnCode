$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Check if a value is a function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a value is a function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a value is a generator function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a value is a generator function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a value is an async function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a value is an async function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Compose functions from left to right
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Compose functions from left to right</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Compose functions
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Compose functions</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Create an empty function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Create an empty function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Curry a function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Curry a function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Delay the evaluation of a function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Delay the evaluation of a function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Execute a function once
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Execute a function once</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Flip the arguments of a function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Flip the arguments of a function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Identity function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Identity function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Logical xor operator
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Logical xor operator</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Memoize a function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Memoize a function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Partially apply a function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Partially apply a function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Uncurry a function
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Uncurry a function</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    + "</ul>"

    $('#pro_function').html(problems);

})