//Avem o cafenea unde se poate: servii cafea, ceai, macha si kambucha;
//Fiecare dintre ele se serveste cu zahar, cate cubulete de zahar vrei?;
//Ce size vrei? "xxl"

//Numele functiei orderBeverage
//Parametrii functiei: type, cuburi, marime
//Output: "Ati comandat o {type} cu {cuburi} cuburi si marimea {marime}"

//Daca adaugam mai mult de doua cuburi: Aveti grija la diabet!;
//Daca marimea este Venti: Nu avem cani atat de mari;
//Daca type este bere, nu servim alcool;

const maxCuburi = 3;
const maxMarime = "Venti";
const missingType = "Bere";

function orderBeverage(type, cuburi, marime){
    if( missingType == type){
        console.log("Nu servim alcool");
    }else if( cuburi >= maxCuburi){
        console.log("Aveti grija la diabet!");
     }else if( maxMarime == marime){
        console.log("Nu avem cani atat de mari ");
    }else{
    console.log("Ati comandat un " + type + " cu " + cuburi + " cuburi si marimea " + marime);
    }
}

orderBeverage("Ceai", 2, "Venti");
orderBeverage("Bere", 2, "XXL");
orderBeverage("Kambucha", 3, "Mediu");