const heading = document.getElementById("number");
let currentVale = parseInt(heading.textContent);

function plyus() {
    currentVale++;
    heading.textContent =currentVale

}

function minus() {
    currentVale--;
    heading.textContent =currentVale
    
}
function nol () {
    currentVale=0;
    heading.textContent =currentVale
}