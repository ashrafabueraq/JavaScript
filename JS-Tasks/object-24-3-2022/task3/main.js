/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
function average(...age){
    this.age=age;
    let avar=0;
        for(i=0;i<age.length;i++){
            avar+=age[i]
        }
        let last=avar/age.length;
        return last;
    }
    let x=average(100,100,50)
    console.log(x);
    