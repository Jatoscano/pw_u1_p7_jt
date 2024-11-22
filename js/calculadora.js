// Colocar un valor al display
var numero1 = 0;
var numero2 = 0;
var operacion = '';

function setValor(valor) {
    console.log(valor);
    if (numero1 === null) {
        numero1 =  valor;
    } else {
        numero2 = valor;
    }  
    numero1 = valor;
    console.log(numero1);
}

function setValorConcat(valor) {
    let valorActual = document.getElementById('display').innerText;
    console.log(valorActual);
    document.getElementById('display').innerText = valorActual + valor;  
}

function setValorG(idelemento, valor) {
   console.log(valor);
   this.numero1 = valor;
    document.getElementById(idelemento).innerText = numero1;
   console.log(this.numero1);
}

function setOperacion(op) {
    this.operacion = op;
}

function calcular(op) {
    let resultado = 0;
    switch(op) {
        case '+':
            resultado = parseInt(this.numero1) + parseInt(this.numero2);
            break;
        case '-':
            resultado = parseInt(this.numero1) - parseInt(this.numero2);
            break;
        case '*':
            resultado = parseInt(this.numero1) * parseInt(this.numero2);
            break;
        case '/':
            resultado = parseInt(this.numero1) / parseInt(this.numero2);
            break;
    }
    setValor(resultado);
}