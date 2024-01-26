/*Create a class that has class/static properties and methods.
Show how to use/access them.*/

class Mammal {
    //class with static properties
    static liveBirth = true;
    static vertebrate = true;

    //class with static methods
    static isMammal(){
        if(Mammal.liveBirth){
            console.log ("Yes, I am a Mammal")
        }
}

    static talk(){
        console.log(`I am a Mammal, it is ${Mammal.liveBirth} that I give birth to my young ones alive.`)
    }
}