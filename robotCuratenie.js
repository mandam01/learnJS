//Daca robotul de curatenie: Primeste un task "Curata sufrageria" - string
//Ustensile: aspirator, mop - array
//Locatie curatenie: sufragerie - string
//Output:
//Starting task: task;
//Gathering: ustensila 1, ustensila 2;
//Heading to: locatie;
//Completed task in locatie with ustensile;
const tasks = [{name: "Clean the leaving room",
                ustensile: ["aspirator", "mop"],
                location: "sufragerie",
},
{       name:"Masa din bucatarie",
        ustensile: ["axion", "burete"],
        location: "bucatarie",

}]

for(var i = 0; i < tasks.length; i++){
    const currentTask = tasks[i];
    console.log("Incepem tasku' cu indexu': " + i )
    cleaningRobot(currentTask.name, currentTask.ustensile, currentTask.location)
}

function cleaningRobot(task, ustensile, locatie){
    console.log("Starting task " + task);
    console.log("Gathering " + ustensile.join(", "));
    console.log("Heading to " + locatie);
    console.log("Completed " + task + " in " + locatie + " with " + ustensile.join(", "));
    console.log("==========================================================================");
}

