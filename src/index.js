// import article, {
//   updateLikes,
//   getComment,
//   createMovieComment,
//   commentGetter
// } from '/src/components/art.js'

const url = 'https://api.artic.edu/api/v1/artworks?limit=20';
const artContent = document.createElement('div');
const artContainer = document.getElementById('art-container');
artContent.classList.add('art-style');


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
          <img class="comment" id="${img.id}" src="/src/comment.png" alt="comment icon">&nbsp;<span class="comment-count">Comments</span>
        </figcaption>
      </figure>
    </article>`).join('');
  artContent.innerHTML = imageString;
  artContainer.appendChild(artContent);
  getLikeElements();

  const popup = async (image_id, id, appID) => {
    commentGetter(id, appID)
    const commentForImages = getComment(id)
    console.log(commentForImages);
    grab('popup-image').src = image_id
    grab('popup').classList.add('container')
  };


  const comentBtn = document.querySelectorAll('.comment')
  comentBtn.forEach(element => {
    element.addEventListener('click', () => {
      // grab('popup').classList.add('container')
      popup()
    })
  });
};


const grab = (e) => document.getElementById(e);
const subBtn = document.querySelector('.sub')

async function getComment(id, appID) {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y5ExZ6TMJ2KXP15dXk0s/comments?item_id=${id}`)
    .then(r => r.json())
    .then(d => {
      renderComment(d)
    })
}

const commentGetter = (id, appID) => {
  subBtn.addEventListener('click', (e) => {
    e.preventDefault()
    alert('hi' + id)
    const name = grab('name')
    const comment = grab('comment')
    if (name.value === '' && comment.value === '') return
    createMovieComment(id, name.value, comment.value, appID)
    console.log(name.value, comment.value);
    name.value = ''
    comment.value = ''
  })
}

const renderComment = (arr) => {
  const commentContainer = grab('popComment')
  commentContainer.innerHTML = '';
  if (arr) {
    arr.forEach((item) => {
      commentContainer.innerHTML += `
      <div>
      <p>
      ${item.creation_date} ${item.username}: ${item.comment}
      </p>
      </div>
      <br>
      `
    })
  }
}

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

function poop() {
  console.log("poop")
}

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

// async function createMovieComment(id, userName, userComment, appID) {
//   const data = JSON.stringify({
//     item_id: id,
//     username: userName,
//     comment: userComment
//   });
//   const resp = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments/`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; Charset=UTF-8',
//     },
//     body: data,
//   });
//   return resp.text();
// };