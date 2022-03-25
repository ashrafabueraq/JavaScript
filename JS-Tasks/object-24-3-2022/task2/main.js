/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(persons) {
    
    this.Fname = persons
}

let myFname = new firstName ("Ashraf");
document.write(`hello ${myFname.Fname}`)
