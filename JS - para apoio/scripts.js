/** validarCPF
 * Este algoritmo é responsável por validar o CPF de UM campo com o name="CPF".
 * O validador utiliza de 2 for, cada um criando uma soma que será verificado posteriormente
 * 
 * @returns {boolean}
 */
function validarCPF() {
    //Pega o valor do input que tem o name="CPF"
    inputs = document.querySelector('input[name="CPF"]').value;
    //Remove tudo que não é número do valor
    inputs = inputs.replace(/[^\d]/g, ''); 
    //Cria um array, com todos os digitos do input 
    num = inputs.toString().split("");
    //Utiliza o array para tornalos númeors
    intnum = num.map(function(digito){return parseInt(digito, 10)})

    const regex = /^(\d)\1+$/;
    check = false
    count = 0
    count2 = 0
    var j = 10
    var k = 11

    //Verifica se o array tem tamanho diferente de 11, caso seja verdade retorna false
    if(num.length != 11){return false;}
    //Verifica se o texto não é apenas números repetidos.
    if(regex.test(inputs)){return false}


    //Fors e Ifs para verificar a validade do cpf, caso esteje ok, o check se tornará true;
    for (var i = 0; i < 9; i++) {  
        count += intnum[i]*j;
        j--;
    }
    if((count*10)%11 == intnum[9] || (intnum[9] == 0) && ((count*10)%11 == 10)||(count2*10)%11 == 11){check = true}
    for (var i = 0; i < 10; i++) {  
        count2 += intnum[i]*k;
        k--;
    }
    if((count2*10)%11 == intnum[10] || (intnum[10] == 0) && ((count2*10)%11 == 10)||(count2*10)%11 == 11){check = true}
    

    if(check == true){
        var d = document.getElementById('cpfvalidar');
        d.removeAttribute('required');
    }
    else{return false}

    //uma funação que irá atualizar o texto no documento em si
    alteraCPF();
}

function formatarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');  
    var formatado = cpf;
    if (cpf.length > 3) {formatado = cpf.substring(0, 3) + '.' + cpf.substring(3);}
    if (cpf.length > 6) {formatado = formatado.substring(0, 7) + '.' + formatado.substring(7);}
    if (cpf.length > 9) {formatado = formatado.substring(0, 11) + '-' + formatado.substring(11);}

    return formatado;
}

//Pesquisa vários inputs com a classe CPF
function alteraCPFs(){
    inputs = document.querySelectorAll('.CPF')
    for (i = 0; i < inputs.length; i++) {
        valorFormatado = formatarCPF(inputs[i].value);
        inputs.value = valorFormatado;
    }
}

//Pesquisa apenas um input
function alteraCPF(){
    inputs = document.querySelector('input[name="CPF"]');
    valorFormatado = formatarCPF(inputs.value);
    inputs.value = valorFormatado;
}

// 55 54 999223482 /13/
// 55 54 99223482  /12/
// 54 999223482    /11/
// 54 99223482     /10/
function formatarTelefone(tele) {
    tele = tele.replace(/[^\d]/g, '');  
    var formatado = tele;

    if(tele.length == 10){
        formatado = '(' + tele.substring(0, 2) + ') ' + tele.substring(2, 6) + '-' + tele.substring(6, 10);
    }
    if(tele.length == 11){
        formatado = '(' + tele.substring(0, 2) + ') ' + tele.substring(2,3) + " " + tele.substring(3, 7) + '-' + tele.substring(7, 11);
    }
    if(tele.length == 12){
        formatado = '[+' + tele.substring(0, 2) + '] ' + '(' + tele.substring(2, 4) + ') ' + tele.substring(4, 8) + '-' + tele.substring(8, 12);
    }
    if(tele.length == 13){
        formatado = '[+' + tele.substring(0, 2) + '] ' + '(' + tele.substring(2, 4) + ') ' + tele.substring(4,5) + " " + tele.substring(5, 9) + '-' + tele.substring(9, 13);
    }


    return formatado;
}

//Pesquisa vários inputs com a classe Telefone
function alteraTelefones(){
    inputs = document.querySelectorAll('.Telefone')
    for (i = 0; i < inputs.length; i++) {
        valorFormatado = formatarCPF(inputs[i].value);
        inputs.value = valorFormatado;
    }
}
//Pesquisa apenas um input
function alteraTelefone(){
    inputs = document.querySelector('input[name="Telefone"]');
    valorFormatado = formatarTelefone(inputs.value);
    inputs.value = valorFormatado;
}

//Ferifica se a Data é hoje ou anterior, caso soje posterior da um ALERT
function validarDataNAtual(){
    var a = Date.now();
    var b = document.querySelector('input[name="data"]').value;

    f = Date.parse(b)
    const diffTime = (a-f);

    if(diffTime < 0){alert("DEU MERDA");}   
}
function alteraDado(obj, id){
    document.getElementById(id).innerHTML = obj.value;
}

/** alteraDado()
 * Adiciona o texto de um obj (input) a um id (texto em si ex: label, span, p, ...).
 * @param {Object} obj - O input que está acionando este evento
 * @param {String} id  - id do objeto alvo que terá seu innerHTML aletrado
 */
function alteraDado(obj, id){document.getElementById(id).innerHTML = obj.value;}


function voidSort(array){return [0];}

function integerSort(array, start) {
    n = []
    for (i = 0; i < array.length; i++) {
        n[i] = i+start;
        return n
    }
    return n;
}

function caosSort(array) {
    n = Math.random();
    if(n < 0.5){
        return [0]
    }else{
        return [1]
    }
}

function alreadSorted(array){
    return array
}

function communistSort(array){
    sum = 0
    arr = []
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    med = sum / array.length;
    for (i = 0; i < array.length; i++) {
        arr[i] = med;
    }
    return arr
}

function captalistSort(array) {
    sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i];
        array[i] = 0;
    }
    array[0] = sum;
    return array;
}

function investSort() {
    //percorre faz a média
    //percorre tira todos abaixo da média, soma os valores dos tirados, e pega o maior valor restante
    //percorre e relaciona a porcentagem do valor com o maior e adiciona com a soma dos valores tirados
}






function randArray(size){
    array = []
    for (i = 0; i < size; i++) {
        array[i] = random(0,size);
    }
    return array
}

/**
 * 
 * @param {number} mn - valor mínimo que deseja gerar
 * @param {number} mx - valor máximo que deseja gerar
 * @returns {number} retorna o valor entre os o minimo e o máximo
 */
function random(mn, mx) {
    return Math.floor(Math.random() * (mx - mn) + mn);
}

//Meses principais
let monthsLower = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let monthsTitle = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let monthsUper = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
 
//Dias da Semana Principais
let weekLower = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];
let weekTitle = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
let weekUper = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "DOMINGO"];


