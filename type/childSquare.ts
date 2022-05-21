import { Rectangle } from "./rectangle";


export class square extends Rectangle{
    hight: number;
    constructor(hight : number){
    hight=hight;
     super(2,5)
    }
   static WhoAmI(){
       console.log("I am square");
   }  
}