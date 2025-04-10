// Verifica se o script foi carregado
console.log("Arquivo JavaScript carregado");

// Dados dos Pokémon
const pokemons = {
    chespin: {
        nome: "Chespin",
        tipo: "Grama",
        altura: "0,6 m",
        peso: "9,2 kg",
        habilidade: "Overgrow",
        stats: {
            hp: 56,
            attack: 61,
            defense: 65,
            special_attack: 48,
            special_defense: 50,
            speed: 40
        },
        descricao: "Chespin é um Pokémon de tipo Grama da região de Kalos. Ele é conhecido por ser muito determinado e se comporta de forma amigável, mas também feroz quando necessário."
    },
    fennekin: {
        nome: "Fennekin",
        tipo: "Fogo",
        altura: "0,4 m",
        peso: "9,4 kg",
        habilidade: "Blaze",
        stats: {
            hp: 40,
            attack: 45,
            defense: 40,
            special_attack: 62,
            special_defense: 60,
            speed: 60
        },
        descricao: "Fennekin é um Pokémon de tipo Fogo da região de Kalos. Fennekin usa suas chamas para se defender e atacar, e sua habilidade é Blaze, que aumenta a potência dos ataques de Fogo quando está com pouca saúde."
    }
    // Adicione mais Pokémon aqui...
};

// Função para mostrar as informações do Pokémon
function mostrarPokemon(pokemonId) {
    console.log("Função mostrarPokemon chamada com o id:", pokemonId); // Verifique se a função está sendo chamada
    const pokemon = pokemons[pokemonId];

    if (!pokemon) return; // Se o Pokémon não for encontrado, retorna

    const pokemonInfoDiv = document.getElementById("pokemon-info");

    // Atualizar o conteúdo da div com as informações do Pokémon
    pokemonInfoDiv.innerHTML = `
        <h2>${pokemon.nome}</h2>
        <img src="images/${pokemonId}.png" alt="${pokemon.nome}" class="pokemon-thumbnail">
        <p><strong>Tipo:</strong> ${pokemon.tipo}</p>
        <p><strong>Altura:</strong> ${pokemon.altura}</p>
        <p><strong>Peso:</strong> ${pokemon.peso}</p>
        <p><strong>Habilidade:</strong> ${pokemon.habilidade}</p>
        
        <h3>Status Base</h3>
        <table>
            <tr><th>HP</th><td>${pokemon.stats.hp}</td></tr>
            <tr><th>Attack</th><td>${pokemon.stats.attack}</td></tr>
            <tr><th>Defense</th><td>${pokemon.stats.defense}</td></tr>
            <tr><th>Special Attack</th><td>${pokemon.stats.special_attack}</td></tr>
            <tr><th>Special Defense</th><td>${pokemon.stats.special_defense}</td></tr>
            <tr><th>Speed</th><td>${pokemon.stats.speed}</td></tr>
        </table>

        <h3>Descrição</h3>
        <p>${pokemon.descricao}</p>
        
        <button onclick="history.back()">Voltar</button>
    `;
}
