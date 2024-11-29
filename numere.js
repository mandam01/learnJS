//const numbers = [3,5,400,300,2021,59,444,18,23,25,625,121];

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
*/
function greeting(name, secondName, year, location){
    console.log('Hello ' + name + " " + secondName + '! Este anul '+ year + '. Suntem in ' + location +'.')
}
greeting('Mihai', 'Viteazul', 1958, 'Tara Romaneasca')

function greetingPerson(person){
  console.log('Hello ' + person.name + " " + person.lastName + '! Este anul ' + person.year + '. Suntem in ' + person.location + '.');
  let message = "";
  message += greetingByFullName(person);
  message += " ";
  message += greetingByYear(person);
  message += " ";
  message += greetingByLocation(person);
  
  console.log(message)
}

greetingPerson({
  name:'Mihai',
  lastName: 'Viteazul',
  year: 1958,
  location: 'Tara Romaneasca'
})

function greetingByFullName(person){
  return 'Hello ' + person.name + " " + person.lastName + "!";
}

function greetingByYear(person){
  return 'Este anul ' + person.year + ".";
}

function greetingByLocation(person){
  return 'Suntem in ' + person.location + ".";
}

