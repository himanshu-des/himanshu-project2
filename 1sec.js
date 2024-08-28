let num = 43;

if(num>=85){
     console.log("Waah ");
}
else if(num>=75){
    console.log("good");
}
else if(num>=65){
    console.log("nice");
}
else if(num>=45){
    console.log("normal");
}
else if(num>=35){
    console.log("poor");
}
else{
    console.log("failed");
}


// switch statment

let string = "human";

switch("human"){
    case "alive":
       console.log(" he will live");
    break;

    case "notalive":
        console.log("he will not live");
    break;
   default:
    console.log("he is god");
    break;

}

// alert and promt
let string2= prompt("level");
let string3=prompt("enter password");
console.log(`hello ${string2} this is your password ${string3}`);

