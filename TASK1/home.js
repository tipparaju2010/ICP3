var Uervalue;


function myFunction() {

    var x = document.getElementById("imgContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        if (document.getElementById("1ply").checked)

            document.getElementById("gameContainer").style.display = 'block';
        x.style.display = "none";
    }

}

function computerValue() {


    var random = Math.floor(Math.random() * 3);


    document.getElementById("computerValue").src = "documents/" + (random+ 1) + ".jpg";
    return random;

}

function userval(uservalue) {
    Uervalue = uservalue;
}

function gameResult() {

    var userVal = Uervalue;
    var comVal = computerValue();

    if (comVal == userVal) {
        alert("Tie");

    } else if (userVal == 0) {
        if (comVal == 2) {
            alert("User Won");
        }
    } else if (userVal == 1) {
        if (comVal == 0) {
            alert("User Won");
        }
    } else if (userVal == 2) {
        if (comVal == 1) {
            alert("User Won");
        }
    } else {
        alert("Computer Won");
    }
}

