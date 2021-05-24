function ShopOpen() {
    var open = undefined
    var d = new Date();
    var n = d.getDay();
    if (n >= 3) {
        var h = d.getHours();
        var m = d.getMinutes();
        if (h == 9 && m >= 30)   {
            var open = true    
        } else if (h >= 10 && h <= 15) {
            var open = true   
        } else {
            var open = false    
        };
    } else {
        var open = false
    };
    if (open == true) {
        document.getElementById("preopen").innerHTML = "Yes, We are";
        document.getElementById("openclose").innerHTML = "Open";
        document.getElementById("openclose").style.color = "green";
        document.getElementById("sign").style.borderColor = "green";
    } else if (open == false) {
        document.getElementById("preopen").innerHTML = "Sorry, We are";
        document.getElementById("openclose").innerHTML = "Closed";
        document.getElementById("openclose").style.color = "red";
        document.getElementById("sign").style.borderColor = "red";
    };};
