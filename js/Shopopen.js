function ShopOpen() {
    var open = undefined
    var d = new Date();
    console.log(d)
    var n = d.getDay();
    console.log(n)
    if (n >= 3) {
        console.log("stage 1")
        var h = d.getHours;
        var m = d.getMinutes;
        if (h == 9 && m >= 30)   {
            var open = true 
            
        } else if (h >= 10 && h <= 2) {
            var open = true 
        } else {var open = false};
    } else {
        var open = false
    };
    console.log(open);
    if (open == true) {
        document.getElementById("preopen").innerHTML = "Yes, We are";
        document.getElementById("openclose").innerHTML = "Open";
        document.getElementById("openclose").style.color = "green";
        document.getElementById("sign").style.borderColor = "green";
        console.log("open");
    } else if (open == false) {
        document.getElementById("preopen").innerHTML = "Sorry, We are";
        document.getElementById("openclose").innerHTML = "Closed";
        document.getElementById("openclose").style.color = "red";
        document.getElementById("sign").style.borderColor = "red";
        console.log("closed");
    };};
