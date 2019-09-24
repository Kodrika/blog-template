var searchMenuDiv = document.getElementById("search-content");
var searchMenu = document.getElementById("search-toggle");
var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");
document.onclick = check;
function check(e) {
    var target = (e && e.target) || (event && event.srcElement);
    if (!checkParent(target, searchMenuDiv)) {
        if (checkParent(target, searchMenu)) {
            if (searchMenuDiv.classList.contains("hidden")) {
                searchMenuDiv.classList.remove("hidden");
                searchfield.focus();
            } else {
                searchMenuDiv.classList.add("hidden");
            }
        } else {
            searchMenuDiv.classList.add("hidden");
        }
    }
    if (!checkParent(target, navMenuDiv)) {
        if (checkParent(target, navMenu)) {
            if (navMenuDiv.classList.contains("hidden")) {
                navMenuDiv.classList.remove("hidden");
            } else {
                navMenuDiv.classList.add("hidden");
            }
        } else {
            navMenuDiv.classList.add("hidden");
        }
    }

}
function checkParent(t, elm) {
    while (t.parentNode) {
        if (t == elm) {
            return true;
        }
        t = t.parentNode;
    }
    return false;
}