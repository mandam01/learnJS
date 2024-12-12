// Creare caracter cu numele: Gandalf, de type: Vrajitor; abilitati: sceptru, palarie magica si pelerina
// Creare caracter cu nuemele: Aragon, de type: Razboinic; abilitati: sabie, scut, horn, coif
// Creare caracter cu numele: Logalas, de type: Arcas; abilitati: arcul, sagetile, tinta

// Returneaza pt fiecare in parte:
// numele:
// type:
// abilitatile:

/*const erou1 = createCaracter("Gandalf", "Vrajitor");

erou1 = {
    name:"Gandalf",
    type:"Vrajitor",
    abilitati:["sceptru", "palarie magica", "pelerina"],
}
*/

function createCaracter(nume, type){

    let abilitati;
    if(type == "Vrajitor"){
        abilitati = ["sceptru", "palarie magica", "pelerina"];
    }else if(type == "Razboinic"){
        abilitati = ["sabie", "scut", "horn", "coif"];
    }else if(type == "Arcas"){
        abilitati = ["arcul", "sagetile", "tinta"];
    }

    const hero = {
        name: nume,
        type: type,
        abilitati: abilitati,
        level: 1,
        speed: 10
    }
    
    function levelUp(){
        hero.level = hero.level + 1;
    }
    function addAbility(abilitate){
        hero.abilitati.push(abilitate);
    }

    function setSpeed(speed){
        hero.speed = speed;
    }

    function displayCaracter(){
       return `
        Name:${hero.name}
        Tipul:${hero.type}
        Abilitati:${hero.abilitati.join(", ")}
        Level:${hero.level}
        Speed:${hero.speed}
       `
    }
    
    return {
        displayCaracter,
        levelUp,
        addAbility,
        setSpeed
    }
}

const erou1 = createCaracter("Aragos", "Arcas");
erou1.levelUp();
erou1.levelUp();
erou1.addAbility("Viteaz");
erou1.setSpeed(50);
console.log(erou1.displayCaracter());