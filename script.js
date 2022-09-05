var musicas = ["A", "B", "C", "E"];

function procurar() { //

  var inputPesquisa = document.getElementById("inputP").value.toLowerCase(); //pegar input

  if (inputPesquisa == "") {
     document.getElementById("numMusicas").innerHTML = "";
    return false;
  }

  var outputIndex = []; //output   

  if ("sorriso maroto - sinal vital".includes(inputPesquisa)) { outputIndex.push(0); }
  if ("camisa 10 - curtindo a vida".includes(inputPesquisa)) { outputIndex.push(1); }
  if ("deixa em off - turma do pagode".includes(inputPesquisa)) { outputIndex.push(2); }
  if ("muito cedo - turma do pagode".includes(inputPesquisa)) { outputIndex.push(3); }
  if ("refém - dilsinho".includes(inputPesquisa)) { outputIndex.push(4); }

  if (outputIndex.length <= 0) {
    document.getElementById("numMusicas").innerHTML = "Nenhuma música encontrada";
  } else {
    document.getElementById("numMusicas").innerHTML = outputIndex.length + "músicas encontradas";
  }
  
  if (outputIndex.length <= 0) {
    document.getElementById("numMusicas").innerHTML = "Nenhuma música enco rada";
  } else {
    document.getElementById("numMusicas").innerHTML = outputIndex.length + "músicas encontradas";
  }

  return outputIndex; //retornar o match
}



function input_player(msc) {
  if(!msc){
    document.getElementById("0").style.display = "block";
    document.getElementById("1").style.display = "block";
    document.getElementById("2").style.display = "block";
    document.getElementById("3").style.display = "block";
    document.getElementById("4").style.display = "block";
    return false;
  }
  document.getElementById("0").style.display = "none";
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  let controle = 0;
  while (controle in msc) {
    document.getElementById(msc[controle]).style.display = "block";
    controle++;
  }
}