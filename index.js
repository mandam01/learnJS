//UN s-a infiintat intre anii 1600 si 2024
//in anu' 1700 a intrat Germania in UN
//in anu' 1750 a venit Franta si Portugalia
//in anul 1800 a plecat a doua tara din UN
//in anu' 1900 a venit Spania si a plecat Germania
//in 1950 au venit Romania si Bulgaria
//in 2000 au plecat ultimele doua tari si au venit Norvegia si Finlanda. 
//1. Cate tari sunt in UN?
//2.Care este prima tara?
//3. Care este ultima tara din UN?

const un = [];

for (var i=1600; i <= 2024;i++){
    if(i === 1700){
        un.push('Germany');
    }

    if(i === 1750) {
        un.push('Franta', 'Portugalia');
    }

    if(i === 1800) {
        un.splice(1,1);
    }
    if(i === 1900){
        un.push('Spania')
        un.shift()
    }
    if(i === 1950){
        un.push('Romania', 'Bulgaria')
    }
    if(i === 2000){
        un.splice(un.length - 2,2)
        un.push('Norvegia', 'Finlanda')
    }

}

/*console.log(un.length)
console.log(un[0])
console.log(un[un.length - 1])
console.log(un.indexOf('Spania'))
*/
un.splice(1, un.length - 2)
console.log(un)

///////////
