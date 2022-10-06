
const url = `https://pokeapi.co/api/v2/pokemon/`


const listaPokemon = []
const pokemon = async() => {
for (let index = 1; index <= 151; index++) {
   fetch(url + index)

   .then((response) => {
   return response.json()})

   .then((data) => {
    listaPokemon.push(data)
    carta(data)
    return data
    
   });
  
}
// console.log(listaPokemon);
}



const $$div = document.querySelector(".container");
const carta = (pika) => {
   // console.log(pika);
   const $$div2 = document.createElement("div")
   const $$img = document.createElement("img")
   $$img.setAttribute("src",pika.sprites.versions["generation-v"]["black-white"].animated.front_shiny)
   const $$p = document.createElement("p");
   $$p.textContent = pika.name;
   $$div2.appendChild($$p)
   $$div2.appendChild($$img)
   $$div.appendChild($$div2)
   


}

pokemon();

let div$$ = document.querySelector(".searchPokemon");
    div$$.innerHTML = '';
const searchPokemons = (name, pika) => {
   const filteredPokemons = pika.filter( (pokemon) => pokemon.title.toLowerCase().includes(name.toLowerCase()));
   carta(filteredPokemons);
}

const setListener = (pika) => {
   let button$$ = document.querySelector('button');
   let input$$ = document.querySelector('input');
   button$$.addEventListener('click', () => searchFilms(input$$.value, pika));
}







