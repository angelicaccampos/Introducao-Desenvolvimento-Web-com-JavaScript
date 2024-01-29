const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 24;
let offset = 0;

const pokemonList = document.getElementById('pokemonList');

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
        </li>
        `).join('')
    pokemonList.innerHTML += newHtml
})}

loadPokemonItems(offset, limit);

loadMoreButton, addEventListener('click', () => {
    offset += limit
    loadPokemonItems(offset, limit)
})



