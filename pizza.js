//Avem o pizzerie. Dam topping + blatul + cm pizza
//Ati comandat o pizza cu marimea x, cu blat x si toppingurile:1,2
//Numele functiei: orderPizza
//Parametrii functiei:marime, blat, toppings
//Output:"Ati comandat o pizza cu marimea {marime}, cu blat {blat} si toppingurile: {toppings.join(", ")}"
//Daca avem toppingul trufe, va rugam sa schimabti toppingul trufe

const missingTopping = "trufe";
const missingBlat = "subtire";
const missingMarime = "XXL";

function orderPizza(marime, blat, toppings){
     if(marime == missingMarime){
       console.log("Nu facem pizza cu marimea: " + missingMarime);
     } else if(blat == missingBlat){
        console.log("Nu avem pe stoc blatul " + missingBlat);
    }else  if(toppings.includes(missingTopping)){
        console.log("Va rugam sa schimbati toppingul: " + missingTopping);
    }else{
        console.log("Ati comandat o pizza cu marimea " + marime + " cu blat " + blat + " si toppingurile: " + toppings.join(", ")) 
    }
}

orderPizza("XXL", "pufos", ["pepperoni", "ciuperci"]);
orderPizza("XXL", "subtire", ["ceapa"]);
