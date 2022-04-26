$(document).ready(function() {
    var deviceWidth = $(window).width();
    var deviceHeight = $(window).height();
    if ( deviceWidth <= "767") {
        $('#contentteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#contentteam').addClass('mobileEffect'); 
            } else {
                $('#contentteam').removeClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#decorationteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#decorationteam').addClass('mobileEffect');
                $('#contentteam').removeClass('mobileEffect'); 
            } else {
                $('#decorationteam').removeClass('mobileEffect'); 
                $('#contentteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#designteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#designteam').addClass('mobileEffect');
                $('#decorationteam').removeClass('mobileEffect'); 
            } else {
                $('#designteam').removeClass('mobileEffect'); 
                $('#decorationteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#documentationteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#documentationteam').addClass('mobileEffect');
                $('#designteam').removeClass('mobileEffect'); 
            } else {
                $('#documentationteam').removeClass('mobileEffect'); 
                $('#designteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#hospitlityteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#hospitlityteam').addClass('mobileEffect');
                $('#documentationteam').removeClass('mobileEffect'); 
            } else {
                $('#hospitlityteam').removeClass('mobileEffect'); 
                $('#documentationteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#hostingteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#hostingteam').addClass('mobileEffect');
                $('#hospitlityteam').removeClass('mobileEffect'); 
            } else {
                $('#hostingteam').removeClass('mobileEffect'); 
                $('#hospitlityteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#logisticsteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#logisticsteam').addClass('mobileEffect');
                $('#hostingteam').removeClass('mobileEffect'); 
            } else {
                $('#logisticsteam').removeClass('mobileEffect'); 
                $('#hostingteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('#mediateam').waypoint(function(direction) {
            if( direction == "down") {
                $('#mediateam').addClass('mobileEffect');
                $('#logisticsteam').removeClass('mobileEffect'); 
            } else {
                $('#mediateam').removeClass('mobileEffect'); 
                $('#logisticsteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#outreachteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#outreachteam').addClass('mobileEffect');
                $('#mediateam').removeClass('mobileEffect'); 
            } else {
                $('#outreachteam').removeClass('mobileEffect'); 
                $('#mediateam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#registrationteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#registrationteam').addClass('mobileEffect');
                $('#outreachteam').removeClass('mobileEffect'); 
            } else {
                $('#registrationteam').removeClass('mobileEffect'); 
                $('#outreachteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#sponsorshipteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#sponsorshipteam').addClass('mobileEffect');
                $('#registrationteam').removeClass('mobileEffect'); 
            } else {
                $('#sponsorshipteam').removeClass('mobileEffect'); 
                $('#registrationteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#webdevteam').waypoint(function(direction) {
            if( direction == "down") {
                $('#webdevteam').addClass('mobileEffect');
                $('#sponsorshipteam').removeClass('mobileEffect'); 
            } else {
                $('#webdevteam').removeClass('mobileEffect'); 
                $('#sponsorshipteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        
        $('#leader-section').waypoint(function(direction) {
            if( direction == "down") {
                $('#webdevteam').removeClass('mobileEffect'); 
            } else {
                $('#webdevteam').addClass('mobileEffect'); 
            }
        }, {
            offset: "50%"
        });
        $('.class-item').removeClass('hover');
        $('.ftco-feature-1').removeClass('hover');
    } else { 
        $('.class-item').addClass('hover');
        $('.ftco-feature-1').addClass('hover');
    };
});