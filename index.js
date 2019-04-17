const lo = require('lodash');
const fs = require('fs');

const myarray = [{name:"steve",age:30},{name:"junior",age:10},{name:"bitomagira",age:20}];

console.log('the array before sort : ');
console.log(myarray);
console.log('------------------------------------------------------------');
console.log('the array after descending sort : ');
const newarray = lo.sortBy(myarray,['age']).reverse();
console.log(newarray);
console.log('------------------------------------------------------------');
console.log("the youngest personne is : ",lo.last(newarray).name);
console.log("the oldest personne is :",lo.first(newarray).name);
console.log('------------------------------------------------------------');
console.log(' removing the oldest personne .......',lo.remove(newarray,lo.first(newarray)));

console.log('------------------------------------------------------------');
console.log('grouping people by age');

const p1 = {name:'Eric',age: 15}
const p2 = {name:'Vianney',age: 15}
const p3 = {name:'toto',age: 15}

myarray.push(p1,p2,p3);

console.log(lo.groupBy(myarray,'age'));

console.log('------------------------------------------------------------');

myarray.forEach((x) => {
    fs.appendFile('people.txt',`${x.name} is ${x.age}\n`, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
})