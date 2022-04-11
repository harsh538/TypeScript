export{}
let message ="Hello";
console.log(message);

let x=10;
const y=30;
// we can declare variables with the help of let and const keyword
//but when to use let and const -> when only delclartion is required not intilization the use let; 
//when both required i.e. declaration with initlization then use const. const have to initilize else we get error
let sum;
const title="harshad vele";
//variable types: basic types-> boolean, number, string
//eg.
let isBeginner : boolean= true; // let <variable name> :<data type> =true/false;

let age:number =21;
let name:string='Harshad';
//template string 
let Allabout :string=`Hi my name is ${name}
I am ${age} years old and my home town is khopoli`;

console.log(Allabout);
// null and undefined types
let n:null=null;
let u:undefined=undefined;

let isNew:boolean=null;
let myname:string=undefined;

//Array-> same data type i.e. only number or only string
let list1:number[]=[1,3,2];
//OR
let list2:Array<number>=[1,3,2];

//tuple -> fixed argument type and mixed data type
let person1:[string,number]=['chris',22];

//enum -> if we want to give more friendly names to a set of numeric value
enum Color {Red,Green,Blue};

let c:Color =Color.Blue;
console.log(c);

//any type -> with the help of "any" data type you can assign any data type value to variable
//we will not get any error
let randomval:any=10;
randomval=true;
randomval='Harshad';

let myVariable:any =10;
//console.log(myVariable.name);
// myVariable();
//(myVariable as string).toUpperCase();

//Type inference
//if we declare without assign then it can assign to any type like Plain Java Script
let a;
a=true;
a=10;
a='Harshad';

//But if we declare variable with some assign value then it will take assign value type

let b=10;
//b=false; //we will get compile time error

//Multi type with the help of pipeline. we will get no error.
//when to use -> when we don't know that which value came from user input 
let multitype: number | boolean;
multitype=10;
multitype=false;

//functions

function add(num1:number,num2:number) :number{
    return num1+num2;
}

let n4=add(10,23);
console.log(n4);


//function with optional parameter
function add1(num1:number, num2?:number):number{
    if(num2)
    return num1+num2;
    else
    return num1;
}

console.log(add1(5,19));
console.log(add1(5));

//function with default parameter
function add2(num1: number,num2:number=10):number{
    if(num2)
    return num1+num2;
    else
    return num1;
}

console.log('add with default parameter '+ add2(5));
console.log(add2(5,50));
//object in Typescript
let p={
    firstname:'Bruce',
    lastname:'wayne'
};

function fullname(person:{firstname:string,lastname:string}){
    console.log(`${person.firstname} ${person.lastname}`);
}

fullname(p);

//interface ->like refrence data type in java

interface PersonD{
    fname:string;
    lname:string;
}
function fullName2(personn:PersonD){
    console.log(`${personn.fname} ${personn.lname}`)
}

let pp={
    fname:'burce',
    lname:'wani'
};

fullName2(pp);

//class in type script
console.log('-----------Class in type Script----------');

class Employee{
    empname :string;
    constructor(name:string){
        this.empname=name;;
    }
    greet(){
        console.log(`Good morning ${this.empname}`);
    }
}

let e1= new Employee('Harshad');
console.log(e1.empname);
e1.greet();

//inheritance concept in type script
console.log('-----------Inheritance in type Script----------');

class Manager extends Employee{
    constructor(mname:string){
        super(mname);
    }
    delegate(){
        console.log(`Manger is doing delegate work ${this.empname}`);
    }
}

let m1 = new Manager('Bruce');
m1.greet();
m1.delegate();
console.log(m1.empname);


// in type script bydefault access modifier is public 
//private -> within the class
//public -> anywhere
//protected -> within class and its subclass( or derived class) 