const grab = (e) => document.getElementById(e);
const subBtn = document.querySelector('.sub')
const updateLikes = async (appID) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`)
    .then(response => response.json())
    .then((data) => {
      data.forEach((article) => {
        grab('l_' + article.item_id).innerText = article.likes
      })
    })
};

const article = (
  imgName,
  imgId,
  title,
  date,
  imageURL,
  appID
) => {
  const artContent = document.createElement('div');
  artContent.id = 'art-container'
  artContent.classList.add('art-style');

  const article = document.createElement('article')
  article.className = 'article-style'
  article.classList.add('art-style')
  const h2 = document.createElement('h2')
  h2.className = 'title'
  h2.innerText = title + ' ' + date
  const h3 = document.createElement('h3')
  h3.className = 'artist'
  h3.textContent = imgName
  const mainImage = document.createElement('img')
  mainImage.src = imageURL
  mainImage.className = "image-style"
  const figure = document.createElement('figure')
  figure.className = 'caption-container'
  const figCaption = document.createElement('figcaption')
  figCaption.className = 'caption-content'
  const span = document.createElement('span')
  span.id = 'l_' + imgId
  span.innerText = '0'
  const div = document.createElement('div')
  const imageHeart = document.createElement('img')
  imageHeart.src = "/src/assets/heart-filled.png"
  imageHeart.addEventListener('click', async () => {
    await like(imgId, appID)
  })
  div.appendChild(span)
  div.appendChild(imageHeart)
  figCaption.appendChild(div)
  const imgComent = document.createElement('img')
  imgComent.src = "/src/assets/comment.png"
  const button = document.createElement('button')
  button.className = 'btns'
  button.id = imgId
  button.innerText = 'Comment'
  button.addEventListener('click', () => {
    popup(imageURL, imgId, appID)
  })
  artContent.appendChild(article)
  article.appendChild(h2)
  article.appendChild(h3)
  article.appendChild(mainImage)
  article.appendChild(figure)
  figure.appendChild(figCaption)
  figCaption.appendChild(imageHeart)
  figCaption.appendChild(imgComent)
  figCaption.appendChild(button)
  article.appendChild(figCaption)
  return article
}

const like = async (id, appID) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`, {
    method: 'Post',
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      item_id: id
    })
  }).then(async () => {
    await updateLikes(appID)
  })
};

export {
  popup,
  updateLikes,
  createMovieComment,
  getComment,
  commentGetter
}
export default article