$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Capitalize a string
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Capitalize a string</h6></div>"
    + "<div class='collapsible-body codejs'>"+ capitalize_A_String() +"</div></li>"

    // Check if a path is relative
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a path is relative</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_A_PathIsRelative() +"</div></li>"

    // Check if a string contains lower case characters
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a string contains lower case characters</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a string contains only digits
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a string contains only digits</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a string contains upper case characters
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a string contains upper case characters</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a string contains whitespace
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a string contains whitespace</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a string is a palindrome
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a string is a palindrome</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a string is lower case
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a string is lower case</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a string is upper case
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a string is upper case</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a url is absolute
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a url is absolute</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if two strings are anagram
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if two strings are anagram</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert a string to camel case
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert a string to camel case</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert a string to pascal case
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert a string to pascal case</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert a string to url slug
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert a string to url slug</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert a windows file path to unix path
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert a windows file path to unix path</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert camel case to kebab case and vice versa
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert camel case to kebab case and vice versa</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert snake case to camel case
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert snake case to camel case</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert the name of an excel column to number
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert the name of an excel column to number</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Escape html special characters
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Escape html special characters</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Generate a random string from given characters
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Generate a random string from given characters</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Generate a random string with given length
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Generate a random string with given length</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the file extension from a file name
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the file extension from a file name</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the file name from an url
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the file name from an url</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the length of a string in bytes
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the length of a string in bytes</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Make the first character of a string lowercase
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Make the first character of a string lowercase</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Normalize file path slashes
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Normalize file path slashes</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Remove spaces from a string
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Remove spaces from a string</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Repeat a string
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Repeat a string</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Replace all line breaks with br elements
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Replace all line breaks with br elements</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Replace multiple spaces with a single space
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Replace multiple spaces with a single space</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Reverse a string
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Reverse a string</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Sort the characters of a string in the alphabetical order
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Sort the characters of a string in the alphabetical order</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Trim slashes at the beginning and the end of a string
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Trim slashes at the beginning and the end of a string</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Trim the file extension from a file name
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Trim the file extension from a file name</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Truncate a string at full words
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Truncate a string at full words</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Unescape html special characters
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Unescape html special characters</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Uppercase the first character of each word in a string
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Uppercase the first character of each word in a string</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    + "</ul>"
    
    $('#pro_string').html(problems);

})

function capitalize_A_String() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "capitalize = str => `<span class='codejs-other'>${str.charAt(0).toUpperCase()}"
    + "${str.slice(1)}</span>`;<br><br>// Example<br>"
    + "<span class='codejs-function'>capitalize</span>('hello world');      // 'Hello world'"
    return code;
}

function if_A_PathIsRelative() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isRelative = path => <span class='codejs-other'>!/^([a-z]+:)?[\\/]/i.test(path);</span>"
    + "<br><br>// Examples<br>"
    + "<span class='codejs-function'>isRelative</span>('/foo/bar/baz');         // false<br>"
    + "<span class='codejs-function'>isRelative</span>('C:\\foo\\bar\\baz');    // false<br>"
    + "<span class='codejs-function'>isRelative</span>('foo/bar/baz.txt');      // true<br>"
    + "<span class='codejs-function'>isRelative</span>('foo.md');               // true<br>"
    return code;
}