/******** Objects  ********/
const carObject = {
    make: "Toyota",
    model: "Corolla",
    year: "2002"
}
// Alerts "Toyota"
// alert(carObject.make); 

// Alerts "Toyota"
// alert(carObject['make']); 

const carModel = carObject.model;
// alert(carModel);

// Length method
const modelLength = carObject.model.length;
// alert(modelLength);

/******** Object constructor ********/
function car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Creating new object using object constructor
const car1 = new car("ford", "falcon", "2005");
// alert(car1.make);

const dogObject = {
    breed: "Staffy",
    age: "5",
    dogMethod : function () {
        // alert("This dog is a "+dogObject.breed);
    }
}

// Outputs "This dog is a Staffy"
dogObject.dogMethod();

// Defining function outside of object constructor function
function truck(make, model, age) {
    this.make = make;
    this.model = model;
    this.age = age;
    this.releaseYear = year;
}

function year() {
    return 2018 - this.age;
}

const truck1 = new truck("tesla", "semi", 2);

// alert(truck1.releaseYear());

/******** Arrays ********/
let arrayExample1 = new Array("element1", "element2", "element3");

// alert(arrayExample1[0]);    // outputs "item1"
// alert(arrayExample1[10]);    //outputs "undefined"

let arrayExample2 = new Array(3);
arrayExample2[0] = "element1";
arrayExample2[1] = "element2";
arrayExample2[2] = "element3";

let arrayExample3 = new Array();
arrayExample3[0] = "element1";
arrayExample3[1] = "element2";
arrayExample3[2] = "element3";
arrayExample3[3] = "element4";
arrayExample3[4] = "element5";

let arrayExample4 = ["element1", "element2", "element3"];

/******** Array properties and methods ********/
// alert(arrayExample4.length);

const arrayConcat = arrayExample1.concat(arrayExample4);
// alert(arrayConcat);

/******** Math object properties ********/
const e = Math.E;
// alert(e);

const ln2 = Math.LN2;
// alert(ln2);

const log2e = Math.LOG2E;
// alert(log2e);

const pi = Math.PI;
// alert(pi);

/******** Math object methods ********/
const absx = Math.abs(-10);
// alert(absx);

const ceilx = Math.ceil(5.6);
// alert(ceilx);

const floorx = Math.floor(5.3);
// alert(floorx);

const randx = Math.random();
// alert(randx);

/******** Window object methods ********/
function repeatAlert() {
    alert("Hello");
}
// setInterval(repeatAlert, 3000);

/******** Date object methods ********/
// alert(Date());

const date1 = new Date(85,1,5,13,49,0,0);
// alert(date1);

// alert(date1.getFullYear());
// alert(date1.getDay());
