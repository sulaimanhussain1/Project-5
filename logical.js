


// Logical Operators  AND (&&)

document.write("<h1>Logical Operator</h1>");
document.write("<h4>And (&&)</h4>");

var a = 12;
var b =  a > 13 && a < 14;    // false && true 
document.write(b);            // false 
document.write("<br>");

var a1 = 12;
var b1 =  a1 > 10 && a1 < 14;    // true && true 
document.write(b1);             //  true
document.write("<br>");

document.write("<h4> Or (||)</h4>");  

var a2 = 12;
var b2 =  a2 > 13 || a2 < 9;    // false && false 
document.write(b2);            // false
document.write("<br>");

var a3 = 12;
var b3 =  a3 > 10 || a3 < 14;    // true && true 
document.write(b3);             //  true
document.write("<br>");

document.write("<h4>Not !</h4>");
var a4 = 50;
var b4 = a4 > 60;   // false
c = !b4;     // true 
document.write(c);
document.write("<br>");


