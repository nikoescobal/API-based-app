// internet example

// async function getUserAsync(name) {
//   let response = await fetch(`https://api.github.com/users/${name}`);
//   let data = await response.json()
//   return data;
// }

// getUserAsync('https://api.github.com/users/nikoescobal')
//   .then(data => console.log(data));


// example from previous project

//   export const postScore = async (name, score) => {
//   await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tv1zYAf6WtGRuAGhGsuk/scores', {
//     method: 'post',
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       user: name,
//       score,
//     }),
//   }).then((res) => res.json()).then((data) => data);
// };

// export const getScores = async () => {
//   const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tv1zYAf6WtGRuAGhGsuk/scores');
//   const data = await response.json();
//   return data;
// };

// example attempt

// const url = 'https://pokeapi.co/api/v2/pokemon/1'

// const getPokemon = async () => {
//   const resp = await fetch(url);
//   const data = await resp.json();
//   console.log(data);
//   document.getElementById("pokemon").textContent = data.name;
// };

// getPokemon();


// actual attempt

// export const getImages = async () => {
//   let response = await fetch(`https://www.artic.edu/iiif/2/{identifier}/{region}/{size}/{rotation}/{quality}.{format}`);
//   let data = await response.json();
//   return data;
// }