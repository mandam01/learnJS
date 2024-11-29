var vaseDeSpalat = 0;
function addToWash(nrVaseDeSpalat){
vaseDeSpalat += nrVaseDeSpalat
console.log("Ai de spalat: " + vaseDeSpalat + " vase")
}

function deleteFromWash(nrVaseDeSpalat){
    vaseDeSpalat -= nrVaseDeSpalat
    console.log("Ai de spalat: " + vaseDeSpalat + " vase")
}

addToWash(2);
deleteFromWash(1);
addToWash(19);
deleteFromWash(8);
