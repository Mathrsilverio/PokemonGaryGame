
var pokemons = ["Bulbasaur", "Charmander", "Squirtle"];

function obtemPokemonSelecionado() {
  var radioEscolhas = document.getElementsByName("escolha");
  for (var i = 0; i < radioEscolhas.length; i++) {
    if (radioEscolhas[i].checked == true) {
      return radioEscolhas[i].value;
    }
  }
}

function jogar() {
  var pokemonSelecionado = obtemPokemonSelecionado();
  sortearPokemon();
  var elementoResultado = document.getElementById("resultado");
  var elementoEscolhaGary = document.getElementById("escolhaGary");
  if (pokemonSelecionado === pokemons[0] && pokemonGary === pokemons[2]) {
    elementoResultado.innerHTML = "Você venceu!";
    elementoEscolhaGary.innerHTML =
      '<img src="./assets/007.png" style="width:60px;height:60px" alt="Imagem do Squirtle">';
  }
  if (pokemonSelecionado === pokemons[0] && pokemonGary === pokemons[1]) {
    elementoResultado.innerHTML = "Você perdeu!";
    elementoEscolhaGary.innerHTML =
      '<img src="./assets/004.png" style="width:60px;height:60px" alt="Imagem do Charmander">';
  }
  if (pokemonSelecionado === pokemons[0] && pokemonGary === pokemons[0]) {
    elementoResultado.innerHTML = "É um empate!";
    elementoEscolhaGary.innerHTML =
      '<img src="./assets/001.png " style="width:60px;height:60px" alt="Imagem do Bulbasaur">';
  }
  if (pokemonSelecionado === pokemons[1] && pokemonGary === pokemons[0]) {
    elementoResultado.innerHTML = "Você venceu!";
    elementoEscolhaGary.innerHTML =
      '<img src="./assets/001.png" style="width:60px;height:60px" alt="Imagem do Bulbasaur">';
  }
  if (pokemonSelecionado === pokemons[1] && pokemonGary === pokemons[2]) {
    elementoResultado.innerHTML = "Você perdeu!";
    elementoEscolhaGary.innerHTML =
      '<img src="./assets/007.png" style="width:60px;height:60px" alt="Imagem do Squirtle">';
  }
  if (pokemonSelecionado === pokemons[1] && pokemonGary === pokemons[1]) {
    elementoResultado.innerHTML = "É um empate!";
    elementoEscolhaGary.innerHTML =
      '<img src="./assets/004.png" style="width:60px;height:60px" alt="Imagem do Charmander">';
  }
  if (pokemonSelecionado === pokemons[2] && pokemonGary === pokemons[1]) {
    elementoResultado.innerHTML = "Você venceu!";
    elementoEscolhaGary.innerHTML =
      '<img src="./assets/004.png" style="width:60px;height:60px" alt="Imagem do Charmander">';
  }
  if (pokemonSelecionado === pokemons[2] && pokemonGary === pokemons[0]) {
    elementoResultado.innerHTML = "Você perdeu!";
    elementoEscolhaGary.innerHTML =
      '<img src="./assets/001.png" style="width:60px;height:60px" alt="Imagem do Bulbasaur">';
  }
  if (pokemonSelecionado === pokemons[2] && pokemonGary === pokemons[2]) {
    elementoResultado.innerHTML = "É um empate!";
    elementoEscolhaGary.innerHTML =
      '<img src="./assets/007.png" style="width:60px;height:60px" alt="Imagem do Squirtle">';
  }

  let restartButton = document.querySelector(".button");
  restartButton.addEventListener("click", restartAnimation, false);

  function restartAnimation(event) {
    let escolhaGary = document.querySelector("#escolhaGary");
    escolhaGary.style.animationName = "none";
    requestAnimationFrame(() => {
      escolhaGary.style.animationName = "";
    });
  }
}

function sortearPokemon() {
  var numeroPokemonGary = parseInt(Math.random() * 3);
  pokemonGary = pokemons[numeroPokemonGary];
}
