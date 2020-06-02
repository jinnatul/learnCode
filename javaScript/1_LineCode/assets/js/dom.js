$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Check if an element is a descendant of another
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if an element is a descendant of another</h6></div>"
    + "<div class='collapsible-body codejs'>"+ ifAnElementIsADescendantOfAnother() +"</div>"

    // Check if an element is focused
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if an element is focused</h6></div>"
    + "<div class='collapsible-body codejs'>"+ ifAnElemenTIsFocused() +"</div>"

    // Check if the touch events are supported
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if the touch events are supported</h6></div>"
    + "<div class='collapsible-body codejs'>"+ ifTheTouchEventsAreSupported() +"</div>"

    // Detect internet explorer browser
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Detect internet explorer browser</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Detect macos browser
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Detect macos browser</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Get all siblings of an element
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get all siblings of an element</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Get the selected text
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get the selected text</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Go back to the previous page
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Go back to the previous page</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Hide an element
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Hide an element</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Insert an element after other one
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Insert an element after other one</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Insert an element before other one
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Insert an element before other one</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Insert given html after an element
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Insert given html after an element</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Insert given html before an element
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Insert given html before an element</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Redirect to another page
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Redirect to another page</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Reload the current page
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Reload the current page</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Replace an element
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Replace an element</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Scroll to top of the page
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Scroll to top of the page</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Show an element
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Show an element</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Strip html from a given text
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Strip html from a given text</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    // Toggle an element
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Toggle an element</h6></div>"
    + "<div class='collapsible-body codejs'></div>"

    + "</ul>"

    $('#pro_dom').html(problems);

})

function ifAnElementIsADescendantOfAnother() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isDescendant = <span class='codejs-function'>(child, parent)</span> => "
    + "parent.<span class='codejs-defMethod'>contains</span>(child);"
    return code;
}

function ifAnElemenTIsFocused() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "hasFocus = ele => (ele === <code class='javascript'><span class='codejs-keyword'>document</span>."
    + "<span class='codejs-defMethod'>activeElement)</span>;"
    return code;
}

function ifTheTouchEventsAreSupported() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "touchSupported = () => ('<span class='codejs-keyword'>ontouchstart</span>' in window || "
    + "window.<span class='codejs-defMethod'>DocumentTouch</span> && <span class='codejs-keyword'>"
    + "document</span> instanceof window.<span class='codejs-defMethod'>DocumentTouch</span>);"
    return code;
}