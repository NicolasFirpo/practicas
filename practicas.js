console.log("\"practicas\" pidiendo datos");


class Personaje{
    constructor(nombre){
        //propiedades
        this.nombre=nombre;
        this.poder=5;
        this.danio=10;
        this.nivel=1;
        this.vida=100;
        this.mana=100;
        this.armadura=10;
        this.resistencia=10;

        }
    
    //propiedades

    //metodos

    clase(Class){
        this.class=Class;
            switch(Class){
                case 'mago': 
                    this.vida=this.vida+(parseInt(this.vida*0.2));
                    this.mana=this.mana+(parseInt(this.mana*0.4));
                    this.armadura+=5;
                    this.resistencia+=15;
                    this.poder+=15;
                    this.danio+=5;
                    break;
                case 'paladin':
                    this.vida=this.vida+(parseInt(this.vida*0.4));
                    this.mana=this.mana+(parseInt(this.mana*0.2));
                    this.armadura+=10;
                    this.resistencia+=5;
                    this.poder+=5;
                    this.danio+=15;
                    break;
                case 'monje':
                    this.vida=this.vida+(parseInt(this.vida*0.3));
                    this.mana=this.mana+(parseInt(this.mana*0.3));
                    this.armadura+=10;
                    this.resistencia+=10;
                    this.poder+=10;
                    this.danio+=10;
                    break;
            }
        }
    recibirDanio(valor){
        this.vida=valor;
        switch(this.class){
            case 'mago':
            this.vida=(this.vida-(valor-this.buff));
            return parseInt(this.vida);
            case 'paladin':
            this.vida=(this.vida-(valor-this.buff));
            return parseInt(this.vida);
            case 'monje':
            this.vida=(this.vida-(valor-this.buff));
            return parseInt(this.vida);
        }
        this.vida=this.vida-(valor-this.buff);
       
    }
    atacar(valor){
        this.attak=valor;
        switch(this.class){
            case 'mago':
                this.attak=(valor+(this.danio*0.2));
                return parseInt(this.attak);
            case 'paladin':
                this.attak=(valor+(this.danio*0.5));
                return parseInt(this.attak);
            case 'monje':
                this.attak=(valor+(this.danio*0.3));
                return parseInt(this.attak);
            default:
                this.attak=(valor+(this.danio*0.3));
                return parseInt(this.attak);
    }
}
    lanzarHechizo(valor){
        this.spell=valor;
        switch(this.class){
            case 'mago':
                this.spell=(valor+(this.poder*0.5));
                return parseInt(this.spell);
            case 'paladin':
                this.spell=(valor+(this.poder*0.2));
                return parseInt(this.spel);
            case 'monje':
                this.spell=(valor+(this.poder*0.3));
                return parseInt(this.spell);
            default:
                this.spell=(valor+(this.poder*0.3));
                return parseInt(this.spell);
    }
}
    recibirCura(valor){
        this.vida=(this.vida+valor)
}
    resistenciaFisica(valor){
        this.buff=valor;
        switch(this.class){
            case 'mago':
                this.buff=(valor-(this.armadura*0.2));
                return parseInt(this.buff);
            case 'paladin':
                this.buff=(valor-(this.armadura*0.5));
                return parseInt(this.buff);
            case 'monje':
                this.buff=(valor-(this.armadura*0.3));
                return parseInt(this.buff);
            default:
                this.buff=(valor-(this.armadura*0.3));
                return parseInt(his.buff);
        }
        
    }
    resistenciaMagica(valor){
        this.buff=valor;
        switch(this.class){
            case 'mago':
                this.buff=(valor-(this.resistencia*0.5));
                return parseInt(this.buff2);
            case 'paladin':
                this.buff=(valor-(this.resistencia*0.2));
                return parseInt(this.buff2);
            case 'monje':
                this.buff=(valor-(this.resistencia*0.3));
                return parseInt(this.buff2);
            default:
                this.buff=(valor-(this.resistencia*0.3));
                return parseInt(this.buff2);
        }
    }
    lanzarCura(valor){
        this.heal=valor;
        switch(this.class){
            case 'mago':
                this.heal=(valor+(this.poder*0.2));
                return parseInt(this.heal);
            case 'paladin':
                this.heal=(valor+(this.poder*0.3));
                return parseInt(this.heal);
            case 'monje':
                this.heal=(valor+(this.poder*0.5));
                return parseInt(this.heal);
            default:
                this.heal=(valor+(this.poder*0.3));
                return parseInt(this.heal);
    }
}
    subirNivel(){
        this.nivel++;
        if(this.nivel>=4){
            switch(this.class){
                case 'mago':
                    this.vida=this.vida+(parseInt(this.vida*0.2));
                    this.mana=this.mana+(parseInt(this.mana*0.4));
                    this.armadura+=5;
                    this.resistencia+=15;
                    this.poder+=15;
                    this.danio+=5;
                    break;
                case 'paladin':
                    this.vida=this.vida+(parseInt(this.vida*0.4));
                    this.mana=this.mana+(parseInt(this.mana*0.2));
                    this.armadura+=15;
                    this.resistencia+=5;
                    this.poder+=5;
                    this.danio+=15;
                    break;
                case 'monje':
                    this.vida=this.vida+(parseInt(this.vida*0.3));
                    this.mana=this.mana+(parseInt(this.mana*0.3));
                    this.armadura+=10;
                    this.resistencia+=10;
                    this.poder+=10;
                    this.danio+=10;
                    break;
                default: 
                    this.vida=this.vida+(parseInt(this.vida*0.3));
                    this.mana=this.mana+(parseInt(this.mana*0.3));
                    this.armadura+=10;
                    this.resistencia+=10;
                    this.poder+=10;
                    this.danio+=10;
            }
         }  else{
                this.vida=this.vida+(parseInt(this.vida*0.2));
                this.mana=this.mana+(parseInt(this.mana*0.2));
                this.armadura+=5;
                this.resistencia+=5;
                this.poder+=5;
                this.danio+=5;
            }
    }
    //metodos

}

const personaje1=new Personaje('Mr Java');
const personaje2=new Personaje('Super PHP');
console.log(personaje2);
console.log(personaje1);
personaje2.clase('paladin');
console.log(personaje2);
/*personaje1.recibirDanio(personaje1.resistenciaFisica(42));*/
personaje1.subirNivel();
console.log(personaje1);
personaje1.subirNivel();
console.log(personaje1);
personaje1.subirNivel();
personaje1.clase('mago');
console.log(personaje1);
personaje1.recibirDanio(parseInt(personaje1.resistenciaFisica(parseInt(personaje2.atacar(100)))));
/*personaje2.recibirDanio(personaje2.resistenciaFisica(personaje1.atacar(10)));*/
console.log(personaje1);
personaje2.recibirCura(personaje1.lanzarCura(10));
console.log(personaje2);
/*
console.log(personaje2);
personaje2.recibirDanio(parseInt(personaje1.atacar(10)));
console.log(personaje2);
personaje2.recibirCura(parseInt(personaje1.lanzarCura(10)));
console.log(personaje2);*/


















/*
console.log("\"objetos literales/clases\" pidiendo datos");





class Personaje{
    constructor(nombre){
        //propiedades
        this.nombre=nombre
        this.poder=1;
        this.nivel=1;
        this.vida=100;
        this.mana=100;
    }
    //propiedades
    //metodos
    atacar(valor){
        this.vida-=valor;
    }
    curar(valor){
        this.vida+=valor;
    }
    subirNivel(){
        this.nivel++;
    }
    subirPoder(){
        this.poder++;
    }
    //metodos
}
class Clase{
    constructor(clase){
        this.parametro=clase;
        switch(this.parametro){
            case 'mago': 
                this.vida=70;
                this.mana=200;
                break;
            case 'paladin':
                this.vida=150;
                this.mana=90
                break;
            case 'monje':
                this.vida=120;
                this.mana=120;
                break;
        }
    }

}

const personaje1=new Personaje('Mr Java');
const personaje2=new Personaje('Super PHP');
const personaje3=new Clase('mago');


personaje1.atacar(42);
personaje1.subirNivel();
personaje1.subirNivel();
personaje1.subirNivel();
personaje1.subirPoder();
console.log(personaje1);
console.log(personaje2);


console.log(personaje3);

*/