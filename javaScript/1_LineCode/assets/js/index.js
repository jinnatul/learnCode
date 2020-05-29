$(function() {
    $("main").hide();
    setTimeout(function() {
        $('.mainLoader').fadeOut();
        $("main").show();
    }, 1000);
    

    // collapsible
    $(document).ready(function(){
        let elem = document.querySelector('.collapsible.expandable');
        M.Collapsible.init(elem, {
          accordion: false
        });
    });

    // Smooth scrolling
    var scrollLink = $(".scroll");
    scrollLink.click(function(e) {
        e.preventDefault();
        $("body,html").animate(
        {
            scrollTop: $(this.hash).offset().top
        },
        2000
        );
    });
})