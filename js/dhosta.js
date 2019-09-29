(function ($) {
    "use strict";    
    var now = new Date();
    var once = new Date("10/05/2019 00:01:00 GMT+0545");
    var time = once.getTime() / 1000 - now.getTime() / 1000;
    $("#dhosta-clock").FlipClock(time, {
        clockFace: 'DailyCounter',
        countdown: true
    });
    /*
    // Calling API
    fetch("https://www.neptics.org.np/api/v1/user", {
         method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: 'Y3ND3PsCgxDLFGWEVQFqLiWaoUcIcvqa', token: 'xbDiHdTE7kc',from:'Register'})
    }).then(resp => resp.json()
    ).then(function(data){        
        console.log(data);
    });
    */
})(jQuery);