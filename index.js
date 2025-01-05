//selecting side nav bar to display only when toggle button is pressed//
var sidenav=document.querySelector(".side-navbar")

function showNavbar(){

    sidenav.style.left="0"
}

function closeNavbar(){
sidenav.style.left="-60%"
}