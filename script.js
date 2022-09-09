
let inputObject = [];
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let form = id("form");
let errorMsg = classes("error");
let blank = "Can't be blank";
let noValid = "Not valid";

let username = id("name");
let cardNumber = id("card-number");
let mm = id("mm");
let yy = id("yy");
let cvc = id("cvc");
let inputs = document.querySelectorAll("input[type=text]");
let inputContainer = document.getElementsByClassName("input-container");
let cardBack = document.querySelector(".card-back");
let cvcDom = document.querySelector(".cvc");
let cardNameDom = document.querySelector(".first");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let numbers = document.querySelectorAll(".number");
let cardNumberDom = document.querySelector(".card-number");
let btnSubmit = id("btn-submit");
let completed = document.querySelector(".completed");



inputObject.push(username);
inputObject.push(cardNumber);
inputObject.push(mm);
inputObject.push(yy);
inputObject.push(cvc);




// Animation for input focus
for(let i = 0; i < inputContainer.length; i++){

    inputs[i].addEventListener("focus", (e) => {
        e.preventDefault();
        inputContainer[i].style.padding = "1px";
        inputs[i].style.border = "1px solid hsl(270, 3%, 87%)";
    });

    inputs[i].addEventListener("blur", (e) => {
        e.preventDefault();
        inputContainer[i].style.padding = "0";
        //inputs[i].style.border = "1px solid hsl(270, 3%, 87%)";
    });

}


// btnSubmit.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(inputContainer[0]);
//     let formGood = false;
//     if(inputContainer[0].value.match("^[a-zA-Z]{3, 20}$")){
//         formGood = true;
//     }
//     if(inputContainer[1].value.match("\d{16}")){
//         formGood = true;
//     }
//     if(inputContainer[2].value.match("[0-1][0-2]")){
//         formGood = true;
//     }
//     if(inputContainer[3].value.match("\d\d")){
//         formGood = true;
//     }
//     if(inputContainer[4].value.match("\d{3}")){
//         formGood = true;
//         console.log("roulette");
//     }

//     if(formGood){
//         form.style.display = "none";
//         completed.style.display = "block";

//     }else{
//         form.style.display = "block";
//         completed.style.display = "none";
//     }
// });

// Cant't be blank
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    for(let i = 0; i < inputObject.length; i++){
        engine(inputObject[i], i, blank);
    }

  });



// Function for input animation
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {

        if(errorMsg[serial]){
            errorMsg[serial].innerHTML = message;
        } 
        id.style.border = "2px solid hsl(0, 100%, 66%)";
    }
    else{
        
        if(errorMsg[serial]){
            errorMsg[serial].innerHTML = " ";
        }
        if(serial == 2 || serial ==  3){
            if(serial == 3){var vari = 2}
            if(serial == 2){var vari = 3}

            if(id.value.trim() == "" || inputs[vari].value.trim() == ""){
                errorMsg[2].innerHTML = message;
            }
        }
    }

    
    
}


cvc.addEventListener("keyup", (e) => {
    e.preventDefault();
    if(cvc.value.trim() == ""){
        cvcDom.innerHTML = "000"
    }
    else{
        cvcDom.innerHTML = cvc.value;

    }
    
});

username.addEventListener("keyup", (e) => {
    e.preventDefault();
    if(username.value.trim() == ""){
        cardNameDom.innerHTML = "Jane Appleseed";
    }
    else{
        cardNameDom.innerHTML = username.value;
    }
});


mm.addEventListener("keyup", (e) => {
    e.preventDefault();
    if(mm.value.trim() == ""){
        month.innerHTML = "00";
    }
    else{
        month.innerHTML = mm.value;
    }
})



yy.addEventListener("keyup", (e) => {
    e.preventDefault();
    if(yy.value.trim() == ""){
        year.innerHTML = "00";
    }
    else{
        year.innerHTML = yy.value
    }
});


btnSubmit.addEventListener("submit", (e) => {
    

});





// let w = 0;
// let p = 0;
// cardNumber.addEventListener("keyup", (e) => {
//     for(let i = 0; i < numbers.length; i++){
//         if(cardNumber.value.trim() == "")
//         numbers[i].innerHTML = "0000";
//     }

//     // let 
//     // while(numbers[w].length != 3){
//     //     numbers[w].innerHTML = cardNumber.value;
//     // }

// });

// cardNumber.addEventListener("focus", (e) =>{
//     e.preventDefault();
//     for(let i = 0; i < numbers.length; i++){
//         cardNumber.addEventListener("keyup", (k) => {
//             k.preventDefault();
//             for(let t = 0; t < numbers.length; t++){
//                 if(cardNumber.value.trim() == "")
//                 numbers[t].innerHTML = "0000";
//             }
//             cardNumber.addEventListener("keyup", (j) => {
//                 j.preventDefault();
//                 while(p < 4){
//                 numbers[w].innerHTML = cardNumber.value;
//                 p++;}
//             });
//             // numbers[w].innerHTML = cardNumber.value;
//             w++;
//         });
//     }
// });