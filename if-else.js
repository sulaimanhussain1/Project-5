

// if else statement 

var nm = prompt ( "Enter your name ? " , "name") ;
var age = prompt("Enter your age for driving license! if you are 18 yoou can drive." , "age" );

if ( age >= 18 ) {
    document.write( nm + " " + " you are qualify for driving.");
    document.write("<br>");
    document.write("BEST OF LUCK!");
}
else {
    document.write("Sorry " + nm + " " + "you do not qaulify for driving,");
}