var displayInfo = function() {

    var genderArr = document.getElementsByName("gender")
    var gender = ""
    for (i=0; i<genderArr.length; i++) {
        if (genderArr[i].checked)
        gender += genderArr[i].value
    }

    var locations = document.getElementById("locations").value
    // var location =""
    // for (j=0; j<locationArr.length; j++) {
    //     if (locationArr[j].selected)
    //     location += locationArr[j].value
    // }
    var mealArr = document.getElementsByName("meal")
    var meal = ""
    for (k=0; k<mealArr.length; k++) {
        if (mealArr[k].checked)
        meal += mealArr[k].value
    }

    

    alert("First Name: " +document.getElementsByName("fname")[0].value +"\n" +
"Last Name: " + document.getElementsByName("lname")[0].value+ "\n"
+ "Age: " +document.getElementsByName("age")[0].value + "\n" +
"Gender: " +gender + "\n" +
"Destination: " +locations+ "\n" +
"Meal: " +meal+ "\n" )
}