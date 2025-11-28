
let password = document.querySelector(".password");

let passwordlength = document.querySelector(".PasswordLength");
let generatebtn = document.querySelector(".generatebtn");

// copy to clipboard button
let copyToClipBoard = document.querySelector(".copy");

// checkbox 

let includeUpperCase = document.querySelector(".includeUpperCase");
let includeLowerCase = document.querySelector(".includeLowerCase");
let includeNumber = document.querySelector(".includeNumber");
let includeSymbols = document.querySelector(".includeSymbols");


// strength coloring

let color = document.querySelector(".coloring");



//generate password function
function generaterandom(length){



    const numbers = "0123456789";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "@$#*.";

    let availablechars ="";

    //condition iF checkbox is checked then include 

    if(includeUpperCase.checked){
        availablechars+= upperCase;

    }
    if(includeLowerCase.checked){
        availablechars+= lowerCase;

    }
    if(includeNumber.checked){
        availablechars+= numbers;

    }
    if(includeSymbols.checked){
        availablechars+= symbols;

    }

     // iF no one is checked then return and gives alert message
    if (availablechars === "") {
        alert("Please select at least one character type!");
        return;
    }

    // use length to generate random index 
    let result = "";
    for(i=0; i<length; i++){
        
        let randomChar = Math.floor(Math.random()*availablechars.length);
        result += availablechars[randomChar];   
    }
    password.textContent = result;
    
    
      
}


generatebtn.addEventListener("click", function () {
    let plength = parseInt(passwordlength.textContent);
    generaterandom(plength);

    if(plength>0 && plength<=5){
        //week password
        color.style.backgroundColor ="red";


    }
    if(plength>5){
        //strong password
        color.style.backgroundColor = "green";
    }
});



// update count using seek bar 
function updateValue(value){
    passwordlength.textContent = value;
    console.log(passwordlength.textContent);
    

}


copyToClipBoard.addEventListener("click", function(){
    // using navigator I can do it

    navigator.clipboard.writeText(password.textContent).then(()=>{
        alert("copied to clipboard");
    }).catch(err=>{
        alert("failed to copy",err);
    })

});


