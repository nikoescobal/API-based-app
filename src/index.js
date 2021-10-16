const url = 'https://api.artic.edu/api/v1/artworks?limit=20';
const artContent = document.createElement('div');
const artContainer = document.getElementById('art-container');
artContent.classList.add('art-style');

function addLikes(index) {
  let likeCount = 0;
  const likeCounterElement = document.querySelectorAll('.like-count');
  likeCounterElement.forEach((likeElement, likeElementIndex) => {
    if (index === likeElementIndex) {
      likeCount++;
      likeElement.innerHTML += `${likeCount}Likes`;
    }
  });
};

const getLikeElements = () => {
  const hearts = document.querySelectorAll('.like');
  hearts.forEach((heart, index) => {
    heart.addEventListener('click', (e) => {
      addLikes(index)
    })
  });
};

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
      <h2 class="title">${img.title},
        ${img.date}</h2>
      <h3 class="artist">${img.artist}</h3>
      <img class="image-style" src="https://www.artic.edu/iiif/2/${img.image_id}/full/843,/0/default.jpg"
        alt="image of artwork">
      <figure class="caption-container">
        <figcaption class="caption-content">
          <img class="like" id="${img.id}" src="/src/heart-empty.png" alt="heart icon">&nbsp; <span class="like-count"></span>
          <img class="comment" id="${img.id}" src="/src/comment.png" alt="comment icon">&nbsp; Comment
        </figcaption>
      </figure>
    </article>`).join('');
  artContent.innerHTML = imageString;
  artContainer.appendChild(artContent);
  getLikeElements();
};
getImages();

// const like = document.getElementsByClassName('like');

// like.addEventListener('click', addLikes);

// document.getElementsByClass('caption-container').addEventListener("click", () => {
//   console.log('hello');
// });

// document.querySelector('#logo').addEventListener("click", () => {
//   console.log('hello');
// });