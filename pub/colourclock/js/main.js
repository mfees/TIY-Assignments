var d, h, m, s, color;

function countUp() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    color = "#" + h + m + s;
    
    
    document.body.style.background = color;
    
    document.getElementById("date").innerHTML =
    color;
    
    setTimeout(countUp, 1000);
}

countUp ();

