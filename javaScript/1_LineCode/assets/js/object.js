$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Check if a value is a plain object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if a value is a plain object</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_A_ValueIs_A_PlainObject() +"</div></li>"

    // Check if a value is an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if a value is an object</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_A_ValueIsAnObject() +"</div></li>"

    // Check if an object is empty
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if an object is empty</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if multiple objects are equal
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Check if multiple objects are equal</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Create an empty map that does not have properties
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Create an empty map that does not have properties</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Create an object from the pairs of key and value
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Create an object from the pairs of key and value</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the value at given path of an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Get the value at given path of an object</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Invert keys and values of an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Invert keys and values of an object</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Omit a subset of properties from an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Omit a subset of properties from an object</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Pick a subset of properties of an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Pick a subset of properties of an object</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Shallow copy an object
    + "<li><div class='collapsible-header'>"
    + "<h6>$ Shallow copy an object</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    + "</ul>"
    
    $('#pro_object').html(problems);

})

function if_A_ValueIs_A_PlainObject() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isPlainObject = v => (!!v && typeof v === '<span class='codejs-keyword'>object</span>' "
    + "&& (v.<span class='codejs-other'>__proto__</span> === null || v.<span class='codejs-other'>"
    + "__proto__</span> === <span class='codejs-keyword'>Object</span>.<span class='codejs-defMethod'>"
    + "prototype</span>));<br><br>// Examples<br>"
    + "<span class='codejs-function'>isPlainObject</span>(null);                    // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>('hello world');           // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>([]);                      // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>(Object.create(null));     // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>(function() {});           // false<br>"
    + "<span class='codejs-function'>isPlainObject</span>({});                      // true<br>"
    + "<span class='codejs-function'>isPlainObject</span>({ a: '1', b: '2' });      // true<br>"
    return code;
}

function if_A_ValueIsAnObject() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isObject = v => (v !== <span class='codejs-other'>null</span> && typeof v === "
    + "'<span class='codejs-keyword'>object</span>');<br><br>// Examples<br>"
    + "<span class='codejs-function'>isObject</span>(null);             // false<br>"
    + "<span class='codejs-function'>isObject</span>('hello world');    // false<br>"
    + "<span class='codejs-function'>isObject</span>({});               // true>br>"
    + "<span class='codejs-function'>isObject</span>([]);               // true <br>"
    return code;
}