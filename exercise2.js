
function checkPalidromeString(w)  {
  var pld = w.split("").reverse().join("");

  //console.log (pld);
 
 //if ( str === pld ) ? "The string is palidrome" : "The string is not palidrome" ;
 
    
     if ( w === pld ) {
        console.log("The string is palidrome");
     } else {
        console.log("The string is not palidrome") ;
     }
}

 checkPalidromeString("pena");
    
    
    