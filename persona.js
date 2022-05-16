
class Persona {
    
    constructor(nombre,apellido){
        this._apellido= apellido;
        this._nombre= nombre;
        
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get apellido (){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido=apellido
    }
}