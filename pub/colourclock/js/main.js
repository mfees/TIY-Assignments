var d, h, m, s, color;

function countUp() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    
    if(h <= 9) h = '0' + h;
    if(m <= 9) m = '0' + m;
    if(s <= 9) s = '0' + s;
    
    color = "#" + h + m + s;
        
    
    document.body.style.background = color;
    
//    document.getElementById("date").innerHTML =
//    color;
    document.getElementById("date").innerHTML = h + ":" + m + ":" + s;
    
    setInterval(countUp, 1000);
}

countUp ();

