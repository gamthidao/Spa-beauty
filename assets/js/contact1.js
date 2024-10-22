document.getElementById("menuIcon").onclick = function () {
    var div = document.querySelector(".divp");

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
};
document.getElementById("divicon").onclick = function () {
    var div = document.querySelector(".divp");

    if (div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
};