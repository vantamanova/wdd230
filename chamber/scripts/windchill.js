var temp= 51;
var wSpeed= 2;

if ((temp <= 50) || (wSpeed > 3)) {
    document.querySelector(".windChill").innerHTML= "N/A";
} else {
    var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    var windChill= Math.round(windChill);
    document.querySelector(".windChill").innerHTML= windChill;
}