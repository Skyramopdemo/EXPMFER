/** validarCPF
 * Este algoritmo é responsável por validar o CPF de UM campo com o name="CPF".
 * O validador utiliza de 2 for, cada um criando uma soma que será verificado posteriormente
 * 
 * @returns {boolean}
 */
function validarCPF() {
    //Pega o valor do input que tem o name="CPF"
    input = document.querySelector('input[name="CPF"]').value;
    //Remove tudo que não é número do valor
    inputFiltrado = input.replace(/[^\d]/g, ''); 
    //Cria um array, com todos os digitos do input 
    numerosString = inputFiltrado.toString().split("");
    //Utiliza o array para tornalos números
    numerosInt = numerosString.map(function(digito){return parseInt(digito, 10)})

    const regex = /^(\d)\1+$/;
    check1 = false
    check2 = false
    contador1 = 0
    contador2 = 0
    var j = 10
    var k = 11

    //Verifica se o array tem tamanho diferente de 11, caso seja verdade retorna false
    if(numerosString.length != 11){return false;}
    //Verifica se o texto não é apenas números repetidos.
    if(regex.test(inputFiltrado)){return false}


    //Fors e Ifs para verificar a validade do cpf, caso esteje ok, o check se tornará true;
    for (var index = 0; index < 9; index++) {  
        contador1 += numerosInt[index]*j;
        j--;
    }
    if((contador1*10)%11 == numerosInt[9] || (numerosInt[9] == 0) && ((contador1*10)%11 == 10)||(contador2*10)%11 == 11){check1 = true}
    for (var index = 0; index < 10; index++) {  
        contador2 += numerosInt[index]*k;
        k--;
    }
    if((contador2*10)%11 == numerosInt[10] || (numerosInt[10] == 0) && ((contador2*10)%11 == 10)||(contador2*10)%11 == 11){check2 = true}
    
    if(check1 == true && check2 == true){
        var cpfSecundario = document.getElementById('cpfvalidar');
        cpfSecundario.removeAttribute('required');
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

/** alteraDado()
 * Adiciona o texto de um obj (input) a um id (texto em si ex: label, span, p, ...).
 * @param {Object} obj - O input que está acionando este evento
 * @param {String} id  - id do objeto alvo que terá seu innerHTML aletrado
 */
function alteraDado(obj, id){
    document.getElementById(id).innerHTML = obj.value;
}


//Meses principais
let monthsLower = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let monthsTitle = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let monthsUper = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
 
//Dias da Semana Principais
let weekLower = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"];
let weekTitle = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
let weekUper = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "DOMINGO"];


