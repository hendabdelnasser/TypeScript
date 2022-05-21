export class Rectangle{
    width : number;
    hight : number;
    constructor(width : number , hight : number) {
        this.width = width;
        this.hight =hight;
    }
    CalcCircumference():number{
   return (this.width + this.hight )*2;
    }

    static WhoAmI():void{
        console.log('I am rectangle');
    }
}