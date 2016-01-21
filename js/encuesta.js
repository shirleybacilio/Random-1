$(document).ready(function() {
    $('.flexslider').flexslider();
    //mensaje
    $(".msge-row-x").click(function() {
        document.cookie = "closed-alert=true";
        $(".msge-row").hide();
    })
    if ($('.site-content').hasClass("dashboard")) {
        $('.site-wrapper').addClass("grid-bg");
    }
    $("#lnk_int_CerrarSesion").click(function() {
        document.cookie = "closed-alert=false";
    })

    // menu height
    targetHeight = $('.site-content').height() + 49;
    $('.site-menu').css("height", targetHeight + "px");

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        lang: 'es',
        defaultDate: '2016-01-12',
        editable: false,
        //events: '/myfeed.php',
        events: [{
            title: 'All Day Event',
            start: '2016-01-01'
        }, {
            title: 'Long Event',
            start: '2016-01-07',
            end: '2016-01-10'
        }, {
            id: 999,
            title: 'Repeating Event',
            start: '2016-01-09T16:00:00'
        }, {
            id: 999,
            title: 'Repeating Event',
            start: '2016-01-16T16:00:00'
        }, {
            title: 'Conference',
            start: '2016-01-11',
            end: '2016-01-13'
        }, {
            title: 'Meeting',
            start: '2016-01-12T10:30:00',
            end: '2016-01-12T12:30:00'
        }, {
            title: 'Lunch',
            start: '2016-01-12T12:00:00'
        }, {
            title: 'Meeting',
            start: '2016-01-12T14:30:00'
        }, {
            title: 'Happy Hour',
            start: '2016-01-12T17:30:00'
        }, {
            title: 'Dinner',
            start: '2016-01-12T20:00:00'
        }, {
            title: 'Birthday Party',
            start: '2016-01-13T07:00:00'
        }, {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2016-01-28'
        }]
    });

});

