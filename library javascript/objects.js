const person={
    name : "pranav",
    study : function(){
        console.log(this.name, " is studying");
    },
}

console.log(person.name);
console.log(person.fullName);
 
console.log(person["name"].toUpperCase());

person.study();