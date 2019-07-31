class Person{
    constructor(name, pwd){
        this.name = name
        this.pwd=  pwd
        this.handle = this.handle.bind(this)
    }

    handle(){
        console.log("handle's this is : ", this);
    }

    toString(){
        let h = this.handle
        h()//handle's this is :  undefined
        // console.log(this);
    }
}

let p = new Person('sb', 'pwdd')

p.toString()