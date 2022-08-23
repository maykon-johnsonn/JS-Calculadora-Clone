class CalcController {
    
    constructor(){
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){
        this._dateEl.innerHTML = "22/08/22";
        this._timeEl.innerHTML = "22:25";
    }

    get dateEl(){
        return this._dateEl.innerHTML;
    }
    set dateEl(value){
        this._dateEl.innerHTML = value;
    }

    get timeEl(){
        return this._timeEl.innerHTML;
    }
    set timeEl(value){
        this._timeEl.innerHTML = value;
    }
    //Recupera o valor presente em displayCalc
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }
    //Insere um novo valor para displayCalc
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }
    // -------------------- 
    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(value){
        this._currentDate = value;
    }


}