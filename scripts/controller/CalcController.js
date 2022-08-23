class CalcController {
    
    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "22/08/22";
        timeEl.innerHTML = "22:25"
    }

    //Recupera o valor presente em displayCalc
    get displayCalc(){
        return this._displayCalc;
    }
    //Insere um novo valor para displayCalc
    set displayCalc(value){
        this._displayCalc = value;
    }
    // -------------------- 
    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(value){
        this._currentDate = value;
    }


}