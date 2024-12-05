const button = document.getElementById("MyButton");
const addTenButton = document.getElementById("addTen");
const doubleButton = document.getElementById("double");
const removeButton = document.getElementById("remove");
const resetButton = document.getElementById("reset");
const input = document.getElementById("MyInput");
const paragraf = document.getElementById("paragraf");
function displaySum(){
    paragraf.textContent = "New value is " + suma;
}

let suma = 0;
button.addEventListener("click",function onClick(){
    if(input.value === ""){
        suma += 0;
    }else{
        suma += parseInt(input.value);
    }

    displaySum();
})
addTenButton.addEventListener("click", function addTen(){
    suma += 10;
    displaySum();
})

doubleButton.addEventListener("click", function double(){
    suma *= 2;
    displaySum();
} )

removeButton.addEventListener("click", function remove(){
    const item = input.value == "" ? 0 : parseInt(input.value);
    suma -= item;
    displaySum();
})

resetButton.addEventListener("click", function (){
    suma = 0;
    displaySum();
})
