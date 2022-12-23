function Animal(){}
Animal.prototype={
    constructor:Animal,
    eat:function(){
        console.log("nom nom nom")
    }
}
function Dog(){}
Dog.prototype={
    constructor:Dog,
    bark:function(){
        console.log('Bark')
    }
}

let beagle = new Animal();
beagle.eat()
console.log(beagle);