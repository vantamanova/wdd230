const button = document.querySelector(".button")

button.addEventListener("click", function() {
    var temp = parseFloat(document.querySelector("#temperature").value);
    var wSpeed = parseFloat(document.querySelector("#windspeed").value);
    
    console.log(temp);
    console.log(wSpeed);

    if ((temp <= 50) || (wSpeed < 3)) {
        document.querySelector(".windChill").innerHTML= "N/A";
    } else {
        var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
        var windChill= Math.round(windChill);
        document.querySelector(".windChill").innerHTML= windChill;
    }
});