const numbers = [3,5,400,300,2021,59,444,18,23,25,625,121];

//care sunt nr-le care se impart la 3
//care sunt nr-le care se impart la 25
//numerele care se impart la si la 5 si la 100

/*for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 3 === 0){
        console.log(numbers[i])
    }
  
}
    */
/*for(var i = 0; i <= numbers.length - 1;i++ ){
    if(numbers[i] % 25 === 0){
        console.log(numbers[i])
    }
}
*/
const numereFiltrate = [];

for(var i = 0; i <= numbers.length -1; i++){
    if(numbers[i] % 5 === 0 || numbers[i] % 100 === 0){
     numereFiltrate.push(numbers[i])
    }
}
const patrate = numereFiltrate.map(function(item){
    return item * item;
})

console.log(numereFiltrate)

const cuburi = numereFiltrate.map((item,index) =>{
    return item * index;
})
console.log(cuburi);