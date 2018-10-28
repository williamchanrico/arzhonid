$("#switch").click(function() {
    if ($("#wrapper").hasClass("night")) {
        $("#wrapper").removeClass("night");
        $("#switch").removeClass("switched");
        $("#particles-js").fadeOut("slow");
        // $("#particles-js").css("visibility", "hidden");

        // loadjscssfile("assets/js/sketch-particles.js", "js");
        // document.getElementById("background-animation-container").innerHTML = '<div id="sketch-particles-container"></div>';
    
        // $.ajax({
        //     url: "/",
        //     success: function(result) {
        //         // removejscssfile("assets/js/particles.js", "js");
        //         // removejscssfile("assets/js/particles-config.js", "js");
        //         // loadjscssfile("assets/js/sketch.min.js", "js");
        //         loadjscssfile("assets/js/sketch-particles.js", "js");
        //         document.getElementById("background-animation-container").innerHTML = '<div id="sketch-particles-container"></div>';
        //     }
        // });

    } else {
        $("#wrapper").addClass("night");
        $("#switch").addClass("switched");
        $("#particles-js").css("visibility", "visible");
        $("#particles-js").css("display", "none");
        $("#particles-js").fadeIn("slow");

        // loadjscssfile("assets/js/particles.js", "js");
        // loadjscssfile("assets/js/particles-config.js", "js");
        // document.getElementById("background-animation-container").innerHTML = '<div id="particles-js"></div>';

        // $.ajax({
        //     url: "/",
        //     success: function(result) {
        //         // removejscssfile("assets/js/sketch.min.js", "js");
        //         // removejscssfile("assets/js/sketch-particles.js", "js");
        //         loadjscssfile("assets/js/particles.js", "js");
        //         loadjscssfile("assets/js/particles-config.js", "js");
        //         document.getElementById("background-animation-container").innerHTML = '<div id="particles-js"></div>';
        //     }
        // });
    }
});

window.onload = function(){
    $("#switch").trigger("click");
}

// var hour = (new Date()).getHours();

// trigger switch if it's night time
// if(hour < 6 || hour >= 18){
//     $("#switch").trigger("click");
// }
