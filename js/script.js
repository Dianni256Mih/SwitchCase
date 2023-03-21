let cargo = 'supervisor';
let salario = 2000;

switch (cargo){
    case 'gerente':
        salario = salario * 1.15;
        document.write(salario + '<br>');
    break;
    
    case 'supervisor':
        salario = salario * 1.10;
        document.write(salario + '<br>');
    break;

    default:
        salario = salario * 1.05;
        document.write(salario + '<br>');
}

document.write("Funcao sem parametro" + '<br>');

function imprimirnoConsole(){
    document.write('Ola mundo!' + '<br>');
}

imprimirnoConsole();

document.write('Funcao com Parametro' + '<br>');

function calc(n1, n2){
    return n1 * n2;
}

let resultado = calc(15, 5);
document.write(resultado + '<br>');

document.write('Funcao por variavel' + '<br>');

const textPorParametro = function(texto){
    document.write(texto);
}

textPorParametro('Testando função por variável' + '<br>');

document.write('Escopo' + '<br>');

let y = 10;

function imprimirnoConsole(){
    let y = 150;
    document.write(y);
}

imprimirnoConsole(y);

document.write('<br>');

document.write(y);
document.write('<br>');

document.write('Função Arrow Function' + '<br>');

let teste = () => {
    document.write('Testando arrow function' + '<br>');
}

teste();

document.write('Array' + '<br>');

let num = [1,2,5,7];
let nome = ['Sara', 'Paula', 'Pedro'];
let bool = [true, false];
let misturado = [1, 'Matheus', true];

document.write(num[2] + '<br>');

document.write('Propriedade' + '<br>');

let nomes = 'José Costa';
document.write(nomes.length);

document.write('<br>');

let marca = 'nick';
document.write(marca.toLocaleUpperCase());
document.write('<br>');
document.write(marca.toLocaleLowerCase());