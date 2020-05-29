$(function() {

    let arrayProblems = "<ul class='collapsible popout'>"

    // Check if all array elements are equal to a given value
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Check if all array elements are equal to a given value</h6></div>"
    + "<div class='collapsible-body'>"+ fun() +"</div></li>"

    // Check if all items in an array are equal
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Check if all items in an array are equal</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Check if an array contains a value matching some criterias
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Check if an array contains a value matching some criterias</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Check if an array is not empty
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Check if an array is not empty</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Check if an array is subset of other array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Check if an array is subset of other array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Check if an object is an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Check if an object is an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Clone an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Clone an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Compare two arrays regardless of order
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Compare two arrays regardless of order</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Compare two arrays
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Compare two arrays</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Convert an array of objects to a single object
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Convert an array of objects to a single object</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Convert an array of strings to numbers
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Convert an array of strings to numbers</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Create an array of cumulative sum
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Create an array of cumulative sum</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Create an array of numbers in the given range
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Create an array of numbers in the given range</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Empty an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Empty an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Find the closest number from an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Find the closest number from an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Find the length of the longest string in an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Find the length of the longest string in an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Find the maximum item of an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Find the maximum item of an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Find the minimum item of an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Find the minimum item of an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Flatten an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Flatten an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Generate an array of random integers in a given range
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Generate an array of random integers in a given range</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Get a random item from an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Get a random item from an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Get the average of an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Get the average of an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Get the intersection of arrays
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Get the intersection of arrays</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Get the sum of array of numbers
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Get the sum of array of numbers</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Get the unique values of an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Get the unique values of an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Get union of arrays
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Get union of arrays</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Merge two arrays
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Merge two arrays</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Partition an array based on a condition
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Partition an array based on a condition</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Remove falsy values from array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Remove falsy values from array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Shuffle an array
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Shuffle an array</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Sort an array of numbers
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Sort an array of numbers</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Split an array into chunks
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Split an array into chunks</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Swap the rows and columns of a matrix
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Swap the rows and columns of a matrix</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Unzip an array of arrays
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Unzip an array of arrays</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    // Zip multiple arrays
    + "<li><div class='collapsible-header blue lighten-2'>"
    + "<h6>Zip multiple arrays</h6></div>"
    + "<div class='collapsible-body'><p></p></div></li>"

    $('#pro_array').html(arrayProblems);

})

function fun() {
    $.get('./assets/test.md', function() {})
        .done(function(res) {
            console.log(res)
            return res
        })
        .fail(function () {
            return "Fail"
        })
    
}