
let sliderElement = document.querySelector("#slider");
let buttonelement = document.querySelector("#button");

let sizepassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-passaword");

let charset ="abcvbdnsBCMKJHGUKJD@";
let novasenha = "";


sizepassword.innerHTML = sliderElement.value;

slider.oninput= function(){
    sizepassword.innerHTML = this.value;    
}

function generatepassword(){
    let pass = "";
    for(let i = 0,n= charset.length; i < sliderElement.value; ++i){
     pass+= charset.charAt(Math.floor(Math.random()*n));      
    }

    console.log(pass);

}