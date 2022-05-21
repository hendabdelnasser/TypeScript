// function greeter(person : string): string {
//     return 'Hello , ' + person;
// }

import { square } from './childSquare';
import { person } from './person.class';
import { Rectangle } from './rectangle';



// const user = 'hend';
// console.log(user);

//#region one

 let r : Rectangle = new Rectangle(2,3);
  console.log(r.CalcCircumference());
  Rectangle.WhoAmI();

  let s:square = new square(2);
  s.CalcCircumference();
  s.hight;
  s.width;
  square.WhoAmI();
  

//#endregion

//#region Two (a.Types annotation, union types)
//Types annotation
let age: number = 20; // number variable
let name: string = "hend";// string variable
let isUpdated: boolean = true;// Boolean variable

//union types
let change : number | boolean;
change = 10;
change = true;
//change = "gg" //error
//#endregion

//#region Two (b.Function with typed arguments and return type.)
function greeter(person : string): string {
    return 'Hello , ' + person;
}

//#endregion

//#region Two (c.Function overriding)
 class R{
    constructor() { 
    }
     WhoAmI(){
        console.log('I am rectangle');
    }
}


class sh extends R{
   
    constructor(){
    super();
    }
    WhoAmI(){
       console.log("I am square");
   }  
}


let h:R = new R();
h.WhoAmI(); //I am rectangle

let x : sh = new sh();
x.WhoAmI(); //I am square


//#endregion

//#region Two (d.Interfaces & classes & inheritance)

let child :person = new person();
child.id();

//#endregion

//#region Two(e.Generics)
function Gnumber(age: number): number {
    return age;
  }

  function Gany(age: any): any {
    return age;
  }

  function G<B>(age: B): B {
    return age;
  }
 
  console.log(Gnumber(23));

  console.log(Gany(25));
 console.log(Gany("hend"));
 console.log(Gany(true));

 const output = G <boolean>(true);
 console.log(output);

 const output2 = G <string>("hend");
 console.log(output2);

 const output3 = G <number>(2);
 console.log(output3);
//#endregion

let Singleton = (function () {
    let instance:any;
    function Instancecreate() {
       let s = "object";
        return s;
    }
    return {
        getIn: function () {
            if (!instance) {
                instance = Instancecreate();
            }
            return instance;
        }
    };
})();
var ins = Singleton.getIn();
var ins2 = Singleton.getIn();
console.log(ins);
console.log(ins2);
