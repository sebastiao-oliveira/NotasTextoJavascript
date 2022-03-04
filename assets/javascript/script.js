//Função para adicionar uma nova linha na tabela
function addToTable() {

    //Definindo as variaveis e recebendo os dados
   // let table = document.getElementById("myTable");
    let titulo = document.getElementById('titulo').value;
    let texto = document.getElementById('texto').value;
  
    let table = document.getElementById("myTable");
   

    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    row.id = tableSize; //Adicionando o id no elemento a ser criado

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Excluir</button>";
    //Criando botão 
    let btnUpdate = "<button class='upDate-btn' onclick='upDateToTable(this)'>Alterar</button>";
  

    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = titulo;
    cell3.innerHTML = texto;
    cell4.innerHTML = btnCode;
    cell5.innerHTML = btnUpdate

    //Limpando os campos de inserção de dados
    document.getElementById('titulo').value = "";
    document.getElementById('texto').value = "";
   
  
    //Retornando 'false' para impedir o reload da pagina
    return false;
}

//Função para remover uma linha
function removeToTable(id){

    let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); //Removendo a linha

    //Retornando 'false' para impedir o reload da pagina
    return false;
}
function upDateToTable(id){
   /* let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row);
    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
   // row.id = document.getElementById(row); //Adicionando o id no elemento a ser criado
    cell1.innerHTML = document.getElementById(row);
    cell2.innerHTML = titulo;
    cell3.innerHTML = texto;
    cell4.innerHTML = btnCode;
    cell5.innerHTML = btnUpdate

    row.parentNode.removeChild(row); //Removendo a linha*/

}

