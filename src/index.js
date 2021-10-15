const url = 'https://api.artic.edu/api/v1/artworks'

const getImages = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const images = data.data;

  let imageString = images.map((image) => {
    return {
      id: image['id'],
      image_id: image['image_id'],
      title: image['title'],
      date: image['date_start'],
      artist: image['artist_title']
    }
  })
  imageString.filter(image => image.image_id !== null && image.title !== null).map(images_url => `<article
  class="flex justify-center w-full h-full p-3 flex-col space-y-2 border-double border-4 border-blue-300 bg-white">
  <h2 class="font-bold font-raleway text-lg">${images_url.title},
    ${images_url.date}</h2>
  <h3 class="px-3 font-extralight font-raleway">${images_url.artist}</h3>
  <img src="https://www.artic.edu/iiif/2/${images_url.image_id}/full/843,/0/default.jpg"
    alt="image of artwork">
  <figure class="flex justify-between px-3 space-x-4">
    <figcaption class="flex py-3 space-x-6 text-base w-full font-nunito">
      <img src="/src/heart-filled.png" alt="heart icon">&nbsp; Like
      <img src="/src/comment.png" alt="comment icon">&nbsp; Comment
    </figcaption>
  </figure>
</article>`).join('');
  console.log(imageString);
  const div = document.createElement('div');
  div.innterHTML = imageString;
  const artContainer = document.getElementById('art-container');
  artContainer.appendChild(div);
  document.body.appendChild(artContainer);
}



getImages();