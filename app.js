




// answer 2
var num1 = prompt ('Enter a First Integer','1')
var num2 = prompt ('Enter a Second Integer','1')
if(num1 > num2){
    alert("It is larger than integer 2")
}
else if(num2 > num1){
    alert("It is larger than integer 1")
}
else if(num1 == num2){
    alert("They are equal")
}
else(
    alert("Please enter a number")
)

// answer 3
var number = prompt("Enter a Number")
if(number == 0){
    console.log("zero");
}
else if(number > 1){
    console.log("positive");
}
else{
    console.log("Negative");
}

// answer 4
var a = prompt("Enter a Letter To Check It Is Vowel Or Not")
if(a == "a" || a == "A"){
    alert("Its Vowel")
}
else if (a == "e" || a == "E"){
    alert("Its Vowel")
}
else if (a == "i" || a == "I"){
    alert("Its Vowel")
}
else if (a == "o" || a == "O"){
    alert("Its Vowel")
}
else if (a == "u" || a == "U"){
    alert("Its Vowel")
}
else(
    alert("Its a Constant")
)

var password = "hamza"
var enter = prompt("Enter a Password")
if(enter == ""){
    alert("Plz enter a password")
}
else if(password == enter){
    alert('“Correct! The password you entered matches the original password”.')
}
else{
    alert("Incorrect Password")
}

var greeting;
var hour = 13;
if (hour > 18) {
    greeting = "Good day";
    console.log(greeting);
}
else{
    greeting = "Good evening";
    console.log(greeting);
}


var time = (prompt("Enter a Time in 24 hors format I give you statement", "19"));
if (time >= 0 && time < 12) {
    alert("Good Morning! \n Its Morning time");
} 
else if (time >= 12 && time < 17) {
    alert("Good Afternoon! \n Its Morning time");
} 
else if (time >= 17 && time < 21) {
    alert("Good Evening! \n Its Evening time");
} 
else if (time >= 21 && time < 24) {
    alert("Good Night! \n Its Night time");
} 
else {
    alert("Invalid time!");
}






