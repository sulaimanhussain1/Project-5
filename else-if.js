

// else if statement ..

var nm = prompt("What is your name ? " ,  " name ");
var score =  prompt("What is your score ? " , "score");

if ( score >= 80 && score <= 100 ){
    document.write(nm + " " + "You got grade A !");
    document.write("<br>");
    document.write("Congratulations");
    if (score < 100 ){
        document.write("this is impossible ! ");
    }
} 

else if ( score >= 70 && score <= 79 ){
    document.write(nm + " " + "You got grade B !");
    document.write("<br>");
    document.write("very good");
}

else if ( score >= 60 && score <= 69){
    document.write(nm + " " + " You got grade C !");
    document.write("<br>");
    document.write("Good");
} 

else{ 
    document.write(nm + " " + "Failed!");
}

// Rest of code ....