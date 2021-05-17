var d = new Date();
var n = d.getDay()
if (n >= 3) {
    var h = d.getHours
    var m = d.getMinutes
    if (h = 9 && m >= 30)   {
        var open = 1
        
    } else if (h >= 10 && h<=2) {
        var open = 1
    } else {var open = 0}
}
if (open = 1) {
    document.getElementById("openclose").innerHTML = "Open";
    document.getElementById("openclose").style.color = "green";
}
if (open = 1) {
    document.getElementById("openclose").innerHTML = "Closed";
    document.getElementById("openclose").style.color = "red";
}
