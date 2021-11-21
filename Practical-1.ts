class A {  
    name: string;  
    constructor(name: string) {  
        this.name = name;  
    }  
    // getName() {  
    //     return name;  
    // }  
    eat(){
        console.log(`${this.name}Eating the food`);
        
    }
}  


class B extends A{

    fname:string;

    constructor(fname: string ,name:string) {  
       super(name);
        this.fname = fname;  
    }  

    friend(){
        console.log(`${this.name} friend name is ${this.fname}`);
        
    }

}

let obj1 = new B("Prashant","rohan"); 
obj1.friend();
obj1.eat();
