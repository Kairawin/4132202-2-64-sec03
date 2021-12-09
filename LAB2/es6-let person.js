let person ={
    name: "Ferm",
    age: 20,
    eyecolor: "black",
    profile: function(){
        return '$(this.name):$(this.age) year';
    },
};

person.age=30;
const X=person;
X.age=20;

console.log(person);
console.log(X.profile());

const numbers=[10, 20, 30, 40];
const comNumA=[numbers, numbers];
const comNumS=[...numbers, ...numbers];
console.log(comNumS);

const sum =(...nums) => {
    total = 0;
    for(let num of nums )total += num;
    return total;
};
console.log(sum(...comNumS));

const [a,b]=[10,20,30];
console.log(a);

const{name: Rname,age}=person;
console.log(Rname);













