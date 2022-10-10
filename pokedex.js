
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
  setListener(listaPokemon)
}
// console.log(listaPokemon);

}

const $$div = document.querySelector(".container");
const carta = (pika) => {
   // console.log(pika);



   
//STRUCTURE
   const $$divp = document.createElement("div");//box
   const $$divs = document.createElement("div");//card
   const $$div2 = document.createElement("div");//front
   const $$img = document.createElement("img");
   const $$div3 = document.createElement("div");
   const $$p = document.createElement("p");
   const $$order = document.createElement("p");
   const $$div22 = document.createElement("div");//back
   const $$img1 = document.createElement("img")
   const $$div33 = document.createElement("div")
   const $$p1 = document.createElement("p")
   const $$order1 = document.createElement("p");
   const $$p2 = document.createElement("p");
   const $$p3 = document.createElement("p");
   $$div2.classList.add("cards")
   $$div22.classList.add("backcards")
   $$divp.classList.add("principalCard")
   $$divs.classList.add("subPrincipalCard")
   $$divp.appendChild($$divs)
   $$divs.appendChild($$div2)
   $$divs.appendChild($$div22)
   $$div2.appendChild($$order)//front
   $$div2.appendChild($$p)
   $$div3.appendChild($$img)
   $$div2.appendChild($$div3)
   $$div22.appendChild($$order1)//back
   $$div22.appendChild($$p1)
   $$div22.appendChild($$p2)
   $$div22.appendChild($$p3)
   $$div33.appendChild($$img1)
   $$div.appendChild($$divp)
   $$div22.appendChild($$div33)

   $$img.setAttribute("src",pika.sprites.other.home.front_shiny)
   $$p.textContent = pika.name;
   $$order.textContent = pika.id;
   $$img1.setAttribute("src",pika.sprites.versions["generation-v"]["black-white"].animated.front_shiny)
   $$p1.textContent = pika.base_experience;
   $$order1.textContent = pika.order;
   $$p2.textContent =pika.height;
   $$p3.textContent =pika.weight;



   
//FRONT OF THE CARD
   /*const $$div2 = document.createElement("div")
   const $$img = document.createElement("img")
   const $$div3 = document.createElement("div")

   //$$img.setAttribute("src",pika.sprites.versions["generation-v"]["black-white"].animated.front_shiny)
   $$img.setAttribute("src",pika.sprites.other.home.front_shiny)
   const $$p = document.createElement("p");
   $$p.textContent = pika.name;
   $$order.textContent = pika.id;
   


   const $$order = document.createElement("p");
   $$order.textContent = pika.id;

   $$div2.appendChild($$order)
   $$div2.appendChild($$p)
   $$div3.appendChild($$img)
   $$div.appendChild($$div2)
   $$div2.appendChild($$div3)
   $$div2.classList.add("cards")

//BACK OF THE CARD


/*const $$div22 = document.createElement("div")
const $$img1 = document.createElement("img")
const $$div33 = document.createElement("div")

$$img1.setAttribute("src",pika.sprites.versions["generation-v"]["black-white"].animated.front_shiny)

const $$p1 = document.createElement("p")
$$p1.textContent = pika.base_experience;

const $$order1 = document.createElement("p");
$$order1.textContent = pika.order;

const $$p2 = document.createElement("p");
$$p2.textContent =pika.height;

const $$p3 = document.createElement("p");
$$p3.textContent =pika.weight;


$$div22.appendChild($$order1)
$$div22.appendChild($$p1)
$$div22.appendChild($$p2)
$$div22.appendChild($$p3)
$$div33.appendChild($$img1)
$$div.appendChild($$div22)
$$div22.appendChild($$div33)
$$div22.classList.add("backcards")*/

   


   


}

const searchPokemons = (name, listaPokemon) => {
   let div$$ = document.querySelector(".searchPokemon");
const filteredPokemons = listaPokemon.filter( (pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
$$div.innerHTML = '';
for (let index = 0; index < filteredPokemons.length; index++) {
   const element = filteredPokemons[index];
   carta(element); 
   }
   

}

const setListener = (listaPokemon) => {
   let input$$ = document.querySelector('input');
   input$$.addEventListener('keyup', () => searchPokemons(input$$.value, listaPokemon));
}

pokemon();
