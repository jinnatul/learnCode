$(function() {

    let problems = "<ul class='collapsible expandable'>"

    // Calculate the number of difference days between two dates
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Calculate the number of difference days between two dates</h6></div>"
    + "<div class='collapsible-body codejs'>"+ numberOfDifferenceDaysBetweenTwoDates() +"</div></li>"

    // Check if a date is between two dates
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a date is between two dates</h6></div>"
    + "<div class='collapsible-body codejs'>"+ if_A_dateBetweenTwoDates() +"</div></li>"

    // Check if a date is today
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a date is today</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Check if a year is leap year
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Check if a year is leap year</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Compare two dates
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Compare two dates</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert a date to yyyy mm dd format
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert a date to yyyy mm dd format</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Convert seconds to hh mm ss format
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Convert seconds to hh mm ss format</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Extract year month day hour minute second and millisecond from a date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Extract year month day hour minute second and millisecond from a date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Format a date for the given locale
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Format a date for the given locale</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the current timestamp in seconds
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the current timestamp in seconds</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the day of the year from a date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the day of the year from a date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the month name of a date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the month name of a date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the number of days in given month
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the number of days in given month</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the tomorrow date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the tomorrow date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the weekday of a date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the weekday of a date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Get the yesterday date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Get the yesterday date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Sort an array of dates
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Sort an array of dates</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    // Validate a gregorian date
    + "<li><div class='collapsible-header'>"
    + "<h6>--> Validate a gregorian date</h6></div>"
    + "<div class='collapsible-body codejs'></div></li>"

    + "</ul>"

    $('#pro_dateTime').html(problems);

})

function numberOfDifferenceDaysBetweenTwoDates() {
    let code = "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "diffDays = <span class='codejs-function'>(date, otherDate)</span> => "
    + "<span class='codejs-defMethod'>Math</span>.ceil(<span class='codejs-defMethod'>"
    + "Math</span>.abs(date - otherDate) / (1000 * 60 * 60 * 24));<br><br>"
    + "// Example<br>"
    + "diffDays(<span class='codejs-keyword'>new </span><span class='codejs-defMethod'>Date</span>('2014-12-19'),"
    + "<span class='codejs-keyword'>new </span><span class='codejs-defMethod'>Date</span>('2020-01-01'));   // 1839"
    return code
}

function if_A_dateBetweenTwoDates() {
    let code = "// `min`, `max` and `date` are `Date` instances<br><br>"
    + "<code class='javascript'><span class='codejs-keyword'>let </span>"
    + "isBetween = <span class='codejs-function'>(date, min, max)</span> => "
    + "(date.<span class='codejs-defMethod'>getTime()</span> >= min.<span class='codejs-defMethod'>"
    + "getTime()</span> && date.<span class='codejs-defMethod'>getTime()</span> "
    + "<= max.<span class='codejs-defMethod'>getTime()</span>);"
    return code;
}