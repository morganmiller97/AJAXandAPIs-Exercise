// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

const obj =JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);


console.log(jokeJS1.setup);
p1.innerText= jokeJS1.setup;

axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)




//3a
async function quoteFunc(){
    try {
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;

    } catch (err) {
        console.log(err);
    }
}
quoteFunc();

async function tvMazeFunc(){

    try {const episodeByNUM = await axios.get(tvMazeUrl);
        console.log(`Question 4`);
        console.log(show);

        p7.innerText = episodeByNUM.data.name;
    } catch(err){
        console.log(err);
    }
    
    tvMazeFunc();







// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);




axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
.then(res => {
    const img = document.createElement(`img`);
    img.src = res.data.sprites.front_shiny_female;
    body.append(img);
})
.catch (err => {
    console.log(err);
})

    console.log(err);
    console.log(`You have been defeated, try again`);
    alert(`You have been defeated , try again`);

}
pokePic();


async function bonusSix()
{
    try{
        const moviePoster = await axios .get (`http://www.omdbapi.com/?apikey=b8b37900&t=dancer+in+the+dark`);
        const poster = document.createElement(`img`);
        poster.src = moviePoster.data.Poster;
        body.append(poster);
    } catch (err) {
        console.log(err);
    }
    }

    bonusSix();
