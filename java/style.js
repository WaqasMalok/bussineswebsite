function show_btn() {
    let show = document.getElementById("show");
    let hide = document.getElementById("hide");
    let navmb = document.getElementById("navmb"); 
    if (navmb.style.display = !"block") {
        navmb.style.display = "block";

    } else {
        navmb.style.display = "block";
        show.style.display = "none";
        hide.style.display = "block";
    }

}
function hide_btn() {
    let show = document.getElementById("show");
    let hide = document.getElementById("hide");
    let navmb = document.getElementById("navmb");
    if (navmb.style.display = !"none") {
        navmb.style.display = "none";

    } else {
        navmb.style.display = "none";
        show.style.display = "block";
        hide.style.display = "none";
    }

}

 function  li_a() {
    let lia = document.getElementsByClassName("li");
    let navii = document.getElementById("navmb");
    let show = document.getElementById("show");
    let hide = document.getElementById("hide");
    let navmb = document.getElementById("navmb"); 
    if (navmb.style.display = !"none") {
        navmb.style.display = "none"
    }else {
        navmb.style.display = "none";
        show.style.display = "block";
        hide.style.display = "none";
    }
 }





// function atag() {
//     let a = document.getElementById("a");
//     let navi = document.getElementById("navi");
//     if (navi.style.display = 'block') {
//         navi.style.display = "none";
//     }
// }