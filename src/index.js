const url = 'https://api.artic.edu/api/v1/artworks?limit=20';
const artContent = document.createElement('div');
const artContainer = document.getElementById('art-container');
artContent.classList.add('art-style');

function postlike() {
  console.log('hello');
}

const getImages = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const images = data.data;


  const imageString = images.map((image) => ({
      id: image.id,
      image_id: image.image_id,
      title: image.title,
      date: image.date_start,
      artist: image.artist_title,
    }))
    .filter((image) => image.image_id !== null && image.artist !== null)

    .map((img) => `<article
      class="article-style">
      <h2 class="font-bold font-raleway text-lg">${img.title},
        ${img.date}</h2>
      <h3 class="px-3 font-extralight font-raleway">${img.artist}</h3>
      <img class="image-style" src="https://www.artic.edu/iiif/2/${img.image_id}/full/843,/0/default.jpg"
        alt="image of artwork">
      <figure class="flex justify-between px-3 space-x-4">
        <figcaption class="caption-container flex py-3 space-x-6 text-base w-full font-nunito">
          <img class="like" id="${img.id}" src="/src/heart-empty.png" alt="heart icon">&nbsp; Like
          <img id="${img.id}" src="/src/comment.png" alt="comment icon">&nbsp; Comment
        </figcaption>
      </figure>
    </article>`).join('');
  artContent.innerHTML = imageString;
  artContainer.appendChild(artContent);
  console.log(imageString);
};
getImages();

// const like = document.getElementsByClassName('like');

// function addLikes() {
//   console.log('poop');
// }

// like.addEventListener('click', addLikes);

// document.getElementsByClass('caption-container').addEventListener("click", () => {
//   console.log('hello');
// });

// document.querySelector('#logo').addEventListener("click", () => {
//   console.log('hello');
// });