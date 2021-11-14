/*
Step 1: Get pets name from user, store in a variable
Step 2: Select option for pet -> feed, pet, walk
Step 3: Loop the actions 6 times, assigning 


f
*/

let dogName = prompt("Name your pet: ");
let totalEnergy = 0;
let totalHappiness = 0;

    for (let i=0; i < 6; i++){
        let action = prompt("feed, pet or walk");
        switch(action){
            case "feed":
                totalEnergy = totalEnergy + 2; 
                break;
            case "pet":
                totalHappiness = totalHappiness + 1;
                break;
            case "walk":
                if (totalEnergy <= 0 || totalHappiness <= 0){
                    alert("Not enough energy to enjoy a walk");
                    break;
                }
                else{
                    totalEnergy = totalEnergy - 1;
                    totalHappiness = totalHappiness + 2;
                    break;

                }

        }

 

    }



    console.log(dogName + " has " + totalHappiness + " happiness and " + totalEnergy + " energy.");