const url = 'https://api.artic.edu/api/v1/artworks?limit=20';
const artContent = document.createElement('div');
const artContainer = document.getElementById('art-container');
artContent.classList.add('art-style');

async function like(id) {
  const appID = 'Y5ExZ6TMJ2KXP15dXk0s';
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`, {
    method: 'Post',
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      item_id: id
    })
  }).then(() => {
    updateLikes
    console.log(id);
  })
}

const likes = [];

const updateLikes = async () => {
  const appID = 'Y5ExZ6TMJ2KXP15dXk0s';
  const likeCount = document.querySelectorAll('.like-count')
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`)
    .then(response => response.json())
    .then((data) => {
      data.forEach((article, index) => {
        likes.push(article.likes)
      })
      getImages();
    })
}

window.onload = updateLikes;

let images = []
/* eslint-disable */
/* stylelint-disable */
const getLikeElements = () => {
  const hearts = document.querySelectorAll('.like');
  const likeCounter = document.querySelectorAll('.like-count');
  hearts.forEach((heart, index) => {
    let counter = 0;
    heart.addEventListener('click', (e) => {
      like(images[index].id)
      counter += 1;
      likeCounter[index].innerHTML = `${likes[index]+counter} Likes`
    });
  });
};
/* eslint-enable */
/* stylelint-enable */

const getImages = async () => {
  const response = await fetch(url);
  const data = await response.json();
  images = data.data;

  images = images.map((image) => ({
    id: image.id,
    image_id: image.image_id,
    title: image.title,
    date: image.date_start,
    artist: image.artist_title,
  })).filter((image) => image.image_id !== null && image.artist !== null)
  const imageString = images.map((img, index) => `<article
      class="article-style">
      <h2 class="title">${img.title},
        ${img.date}</h2>
      <h3 class="artist">${img.artist}</h3>
      <img class="image-style" src="https://www.artic.edu/iiif/2/${img.image_id}/full/843,/0/default.jpg"
        alt="image of artwork">
      <figure class="caption-container">
        <figcaption class="caption-content">
          <img class="like" id="${img.id}" src="/src/heart-empty.png" alt="like icon">&nbsp;<span class="like-count">${likes[index]} Likes</span>
          <img class="comment" id="${img.id}" src="/src/comment.png" alt="comment icon">&nbsp; Comment
        </figcaption>
      </figure>
    </article>`).join('');
  artContent.innerHTML = imageString;
  artContainer.appendChild(artContent);
  getLikeElements();
};