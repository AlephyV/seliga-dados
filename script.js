function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function submitForm()
{
  var email = document.getElementById("email").value
  var url = "https://questoes-5e22b.firebaseio.com/usuarios.json"
  var json = httpGet(url)
  var object = JSON.parse(json)
  var array = Object.values(object)

  for(item in array) {
    var aluno = array[item];
    if(aluno.email == email) {
      mostrarDados(aluno);
    }
  }
}

function mostrarDados(aluno)
{
  limparDados();
  document.getElementById("nome").value = aluno.nome;
  document.getElementById("pontuacao").value = aluno.pontuacao;
  document.getElementById("medalhas").value = aluno.quantidade_medalhas;
  document.getElementById("problemas").value = aluno.quantidade_problemas_respondidos;
}

function limparDados()
{
  document.getElementById("nome").value = ""
  document.getElementById("pontuacao").value = ""
  document.getElementById("medalhas").value = ""
  document.getElementById("problemas").value = ""
}