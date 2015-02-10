var d, h, m, s, hexHours, hexMinutes, hexSecs, color;

function countUp() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    
    hexHours = (Math.floor(h * 255/23)).toString(16);
    hexMinutes = (Math.floor(m * 255/59)).toString(16);
    hexSecs = (Math.floor(s * 255/59)).toString(16);
    
    
    if(h <= 9) h = '0' + h;
    if(m <= 9) m = '0' + m;
    if(s <= 9) s = '0' + s;
    
    
    if(hexHours.length < 2) hexHours = '0' + hexHours;
    if(hexMinutes.length < 2) hexMinutes = '0' + hexMinutes;
    if(hexSecs.length < 2) hexSecs = '0' + hexSecs;
    
    
    color = "#" + hexHours + hexMinutes + hexSecs;

    
    document.body.style.background = color;
    
    document.getElementById("date").innerHTML = h + ":" + m + ":" + s;
    
    setInterval(countUp, 1000);
    
    console.log(countUp);
};

countUp();