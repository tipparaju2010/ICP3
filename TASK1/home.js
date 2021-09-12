function myFunction() {

    var x = document.getElementById("intro-image");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        if(document.getElementById("1ply").checked)
        x.style.display = "none";
        document.getElementById("onePlayer").style.display='block';
    }

}

