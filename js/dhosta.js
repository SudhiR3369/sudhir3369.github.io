(function ($) {
    "use strict";    
    var now = new Date();
    var once = new Date("09/29/2019 00:01:00 GMT+0545");
    var time = once.getTime() / 1000 - now.getTime() / 1000;
    $("#dhosta-clock").FlipClock(time, {
        clockFace: 'DailyCounter',
        countdown: true
    });


    /*
    // Calling API
    fetch("https://www.neptics.org.np/api/v1/user", {
        method: 'GET',         
        headers:{
          'Content-Type': 'application/json'
        }
    }).then(resp => resp.json()
    ).then(function(data){        
        console.log(data);
    });
    */
})(jQuery);