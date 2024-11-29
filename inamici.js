var inamici = 1;
//facem o functie care adauga 10 inamici;
function addTen(){
    addX(10)
    console.log("+ zece " + inamici)
}
//o functie care dubleaza nr de inamici;
function doubleInamici(){
    inamici *= 2
    console.log("double" + inamici)
}
//o functie care decimeaza inamicii /10;
function decimeazaInamicii(){
    inamici /= 10
    inamici = parseInt(inamici)
    console.log("decimare " + inamici)
}
//o functie care adauga un x dat de inamici;
function addX(x){
    inamici += x
    console.log("add x " + inamici)
}
//o functie care sterge un x de inamici;
function deleteX(x){
    inamici -= x
    console.log("delete x " + inamici)
}

addTen();
decimeazaInamicii();
addX(100);
deleteX(39);
doubleInamici()