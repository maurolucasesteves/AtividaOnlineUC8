let readlineSync = require('readline-sync');
var data_Evento
var data_Nasc
var listadePartipantes
//Pega data atual 
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
//console.log(dataAtual);

function gerarData(str) 
{
    var partes = str.split("/");
    return new Date(partes[2], partes[1] - 1, partes[0]);
   }

function testeData()
{
    data_Evento = readlineSync.question("Digite a data do Evento usando separacao com / : ");
    //console.log( gerarData(data_Evento) );
    
    /*if ( gerarData(data_Evento) === gerarData(dataAtual) ) 
    {
     console.log("Datas iguais não permitido");
    }
    else if ( gerarData(data_Evento) == gerarData(dataAtual) ) 
    {
            console.log("Datas iguais com ==");
    }
    */
    if ( gerarData(data_Evento) > gerarData(dataAtual) )
    {
      console.log("Cadastro Permitido");
      ///Prosseguimento do Sistema verificação de maior idade AINDA NÃO ESTÁ OK!!
      data_Nasc = readlineSync.question("Digite a data sua data de Nascimento, usando separacao com / : ");
          diff = dataAtual - data_Nasc
          //console.log("data menos atual") 
           if (diff > 18)
             console.log("Cadastro não permitido")
          else
            console.log("Cadastro Permitido")
        
    } 
    else if ( gerarData(data_Evento) < gerarData(dataAtual) ) 
    {
      console.log("Não Permitido, Data do Evento é anterior a data atual.");
      console.log("Deseja inserir nova Data? "); // Não sei voltar para linha 37 :(

    }
    else
    {
      console.log("inconclusivo \n data_Evento="+gerarData(data_Evento)+" \n dataAtual ="+gerarData(dataAtual));      
    } 
  }
testeData();