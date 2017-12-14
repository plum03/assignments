// Careful -- Code is INCOMPLETE
var input = document.getElementById("fname");
var input = document.getElementById("age");
var input = document.getElementById("bday");
var form = document.getElementById("form");
var gender = document.getElementById("gender");
var output = {};

// function submit() {
//     output.name = name.value;
//     output.age = age.value;
//     output.bday = bday.value;
//     output.gender = gender.value;
// }



function beautify() {

    return "First Name: " + output.fname + "\nGender: " + output.gender + "\nFavorites: " + output.favorites.join(" ");
}

function getsGender() {
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].checked;
        } else {
            console.log("Gender not given");
        }
    }
}

function getsFavorites() {

}

function submit() {
    output.fname = fname.value;
    output.gender = getsGender();
    output.favorites = getsFavorites();
    alert(beautify());
}

form.onsubmit = submit();