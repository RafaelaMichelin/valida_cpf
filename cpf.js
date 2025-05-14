function validarCPF(cpf){
    cpf= cpf.replace( / [^\d] + /g,"");


    //condição
    if(cpf.length!==11 || /^(\d)\1+$/.test(cpf)){   //expressao para ver se esta sendo digitado varios numeros iguais
  
        return false;
    }

    //criação de variáveis
    let soma = 0;
    let resto;

    //Validação da primeira DV com laço de repetição
    for(let i = 1; i <=9; i++)
    {
        soma += parseInt(cpf.substring( i-1, i)) * (11-i);
    }

    resto = (soma*10) % 11;                 //mod % é o resto da divisão
    

    if(resto === 10 || resto === 11)
    {
        resto = 0;

    }

    // resto do calculo anterior e comparando se o digito é diferente do 9 e 10 digito
    if(resto !== parseInt(cpf.substring(9,10))){
        return false;
    }


    // Validação do segundo DV
    soma = 0;
    for( let i = 1; i <=10 ; i++){
        soma += parseInt(cpf.substring(i-1, i)) * (12 - i);

    }

    resto = (soma * 10) % 11;
    if(resto === 10 || resto === 11)
    {
        resto = 0;

    }
 if(resto !== parseInt(cpf.substring(10,11))){
    return false;
 }

 //válido: retorna TRUE

 return true;

}


//
document.getElementById("cpfform").addEventListener("submit", function(e){
//evita atualização da pg
e.preventDefault();
const cpfInput = document.getElementById("cpf").value;

const messageDiv = document.getElementById("message");

if(validarCPF(cpfInput)){
    messageDiv.textContent = "CPF Válido";
    
    messageDiv.className = "message sucess";   //ativa oque está no css para ficar com cor verde

} else{
    messageDiv.textContent = "CPF inválido";
    messageDiv.className = "message error";

}
messageDiv.style.display = "block";
});