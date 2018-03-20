
class AirplaneDTO{
    constructor(obj){
        this._alt = obj.Alt;
        this._id = obj.Id;
        this._origin = obj.From;
        this._dest = obj.To;
        this._man = obj.Man;
        this._mdl = obj.Mdl;
        this._comp = obj.Op;
        
    }
    get alt(){
        return this._alt;
    }
    set alt(a){
        this._alt = a;
    }
    get id(){
        return this._id;
    }
    set id(a){
        this._id = a;
    }
    get origin(){
        return this._origin;
    }
    set origin(a){
        this._origin = a;
    } 
    get dest(){
        return this._dest;
    }
    set dest(a){
        this._dest = a;
    }
    get man(){
        return this._man;
    }
    set man(a){
        this._man = a;
    }
    get mdl(){
        return this._mdl;
    }
    set mdl(a){
        this._mdl = a;
    }
    get comp(){
        return this._comp;
    }
    set comp(a){
        this._comp = a;
    }
    
}

export default AirplaneDTO;