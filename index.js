let btn_football = document.getElementById('btn_football');
let btn_golf = document.getElementById('btn_golf');
let btn_basketball = document.getElementById('btn_basketball');
let btn_tennis = document.getElementById('btn_tennis');
let btn_boxing = document.getElementById('btn_boxing');

let btn_usa = document.getElementById('btn_usa');
let btn_arg = document.getElementById('btn_arg');
let btn_switz = document.getElementById('btn_switz');
let btn_france = document.getElementById('btn_france');
let btn_mexico = document.getElementById('btn_mexico');
let btn_potugal = document.getElementById('btn_potugal');


let cards = document.getElementsByClassName("cards")
for(let i = 0; i < cards.length; i++){
  cards[i].classList.remove('hide')
}

btn_football.onclick = function(){
  let cards = document.getElementsByClassName("cards")
  let football = document.getElementsByClassName('football')
for(let i = 0; i < cards.length; i++){
  cards[i].classList.add('hide')
}
for(let i = 0; i < football.length; i++){
  football[i].classList.remove('hide')
}
}

btn_basketball.onclick = function(){
  let cards = document.getElementsByClassName("cards")
  let basketball = document.getElementsByClassName('basketball')
for(let i = 0; i < cards.length; i++){
  cards[i].classList.add('hide')
}
for(let i = 0; i < basketball.length; i++){
  basketball[i].classList.remove('hide')
}
}

btn_golf.onclick = function(){
  let cards = document.getElementsByClassName("cards")
  let golf = document.getElementsByClassName('golf')
for(let i = 0; i < cards.length; i++){
  cards[i].classList.add('hide')
}
for(let i = 0; i < golf.length; i++){
  golf[i].classList.remove('hide')
}
}

btn_tennis.onclick = function(){
  let cards = document.getElementsByClassName("cards")
  let tennis = document.getElementsByClassName('tennis')
for(let i = 0; i < cards.length; i++){
  cards[i].classList.add('hide')
}
for(let i = 0; i < tennis.length; i++){
  tennis[i].classList.remove('hide')
}
}

btn_boxing.onclick = function(){
  let cards = document.getElementsByClassName("cards")
  let boxing = document.getElementsByClassName('boxing')
for(let i = 0; i < cards.length; i++){
  cards[i].classList.add('hide')
}
for(let i = 0; i < boxing.length; i++){
  boxing[i].classList.remove('hide')
}
}

btn_france.onclick = function(){
  let cards = document.getElementsByClassName("cards");
for(let i = 0; i < cards.length; i++){
    cards[i].classList.add('hide')
}
let france = document.getElementsByClassName("france");
for(let i = 0; i < france.length; i++){
    france[i].classList.remove('hide')
}
}

btn_potugal.onclick = function(){
  let cards = document.getElementsByClassName("cards");
for(let i = 0; i < cards.length; i++){
    cards[i].classList.add('hide')
  }
  let portugal = document.getElementsByClassName("portugal");
for(let i = 0; i < portugal.length; i++){
    portugal[i].classList.remove('hide')
}
}

btn_arg.onclick = function(){
  let cards = document.getElementsByClassName("cards");
for(let i = 0; i < cards.length; i++){
    cards[i].classList.add('hide')
  }
  let arg = document.getElementsByClassName("arg");
for(let i = 0; i < arg.length; i++){
    arg[i].classList.remove('hide')
}
}

btn_mexico.onclick = function(){
  let cards = document.getElementsByClassName("cards");
for(let i = 0; i < cards.length; i++){
    cards[i].classList.add('hide')
  }
  let mexico = document.getElementsByClassName("mexico");
for(let i = 0; i < mexico.length; i++){
    mexico[i].classList.remove('hide')
}
}

btn_switz.onclick = function(){
  let cards = document.getElementsByClassName("cards");
for(let i = 0; i < cards.length; i++){
    cards[i].classList.add('hide')
  }
  let switz = document.getElementsByClassName("switz");
for(let i = 0; i < switz.length; i++){
    switz[i].classList.remove('hide')
}
}

btn_usa.onclick = function(){
  let cards = document.getElementsByClassName("cards");
for(let i = 0; i < cards.length; i++){
    cards[i].classList.add('hide')
  }
  let usa = document.getElementsByClassName("usa");
for(let i = 0; i < usa.length; i++){
    usa[i].classList.remove('hide')
}
}

let header = document.getElementById('header')
header.addEventListener('click', function() {
  location.reload()
});
let reset = document.getElementById('reset')
reset.addEventListener('click', function() {
  location.reload()
})
