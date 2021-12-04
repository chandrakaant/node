//high order functions
//which takes functino as an arguments.


//call back function 
//Function which are passed as a function in another function.

function getFirstName(name) {
    name = name.split(" ");
    return name[0];
}

function getLastName(name) {
    name = name.split(" ");
    return name[1]; 
}

function fun(name, sayIt) {
    let a = sayIt(name);
    console.log(a + " says hi")
}

fun("ck patel", getFirstName);
fun("ck patel", getLastName);
