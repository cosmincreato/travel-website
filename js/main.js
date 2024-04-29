const mobile = window.matchMedia("screen and (max-width: 768px)");
const bar = document.getElementsByClassName("fa fa-bars")[0];

var barToggled = false; 

function toggleBar() {
    barToggled = !barToggled;
    let nav = document.getElementsByClassName("toggle-nav")[0];
    if (barToggled) {
        nav.style.display = "inline";
    }
    else {
        nav.style.display = "none";
    }
}

bar.addEventListener("click", (e) => toggleBar());

mobile.addEventListener("change", (e) => {
    if (!e.matches && barToggled) {
        toggleBar();
    }
})