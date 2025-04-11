function sennaSection(){
window.location.assign("/pilotos/senna.html");
}

function fittipaldiSection(){
    window.location.assign("/pilotos/fittipaldi.html");
}

function barrichelloSection(){
    window.location.assign("/pilotos/barrichello.html");
}

function piquetSection(){
    window.location.assign("/pilotos/piquet.html");
}

function paceSection(){
    window.location.assign("/pilotos/pace.html");
}

// horizontal scroll function
const container = document.getElementById("images");
        container.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
            container.scrollLeft += 400;
            e.preventDefault();
            // prevenDefault() will help avoid worrisome 
            // inclusion of vertical scroll 
        }
        else {
            container.scrollLeft -= 400;
            e.preventDefault();
        }
    });