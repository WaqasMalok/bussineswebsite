window.addEventListener("scroll", function () {
    let nav = document.querySelector("header");
    nav.classList.toggle("navbg", window.scrollY > 0);

});
// function show_btn() {
//     let show = document.getElementById("show");
//     let hide = document.getElementById("hide");
//     let navmb = document.getElementById("navimb"); 
//     if (navmb.style.display = !"block") {
//         navmb.style.display = "block";

//     } else {
//         navmb.style.display = "block";
//         show.style.display = "none";
//         hide.style.display = "block";
//     }

// }

 show = document.getElementById("show");
 hide = document.getElementById("hide");
 navmb = document.getElementById("navimb");
navmb.addEventListener('clik', ()=>{
    navmb.classList.toggle("navmbscroll");
    navmb.classList.toggle("navmbscroll");
})



// function hide_btn() {
//     let show = document.getElementById("show");
//     let hide = document.getElementById("hide");
//     let navmb = document.getElementById("navimb");
//     if (navmb.style.display = !"none") {
//         navmb.style.display = "none";

//     } else {
//         navmb.style.display = "none";
//         show.style.display = "block";
//         hide.style.display = "none";
//     }

// }

function lia() {
    let lia = document.getElementsByClassName("li");
    let show = document.getElementById("show");
    let hide = document.getElementById("hide");
    let navmb = document.getElementById("navi");
    let body = document.querySelector("body");
    if (navmb.style.display = !"none") {
        navmb.style.display = "none"
    } else {
        navmb.style.display = "none";
        show.style.display = "block";
        hide.style.display = "none";
    }
}
function body() {
    let body = document.querySelector("body");
    if (navmb.style.display = !"none") {
        navmb.style.display = "none"
    } else {
        navmb.style.display = "none";
    }
}


