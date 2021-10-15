const url = 'https://api.artic.edu/api/v1/artworks'
  const div = document.createElement('div');
  const artContainer = document.getElementById('art-container');



const getImages = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const images = data.data;

  const imageString = images.map((image) => {
    return {
      id: image['id'],
      image_id: image['image_id'],
      title: image['title'],
      date: image['date_start'],
      artist: image['artist_title']
    }
  })
  .filter(image => image.image_id !== null && image.title !== null)
  .map(img =>  `<article
   class="flex justify-center w-full h-full p-3 flex-col space-y-2 border-double border-4 border-blue-300 bg-white">
   <h2 class="font-bold font-raleway text-lg">${img.title},
     ${img.date}</h2>
   <h3 class="px-3 font-extralight font-raleway">${img.artist}</h3>
   <img src="https://www.artic.edu/iiif/2/${img.image_id}/full/843,/0/default.jpg"
     alt="image of artwork">
   <figure class="flex justify-between px-3 space-x-4">
     <figcaption class="flex py-3 space-x-6 text-base w-full font-nunito">
       <img id="${img.id}" src="/src/heart-filled.png" alt="heart icon">&nbsp; Like
       <img id="${img.id} src="/src/comment.png" alt="comment icon">&nbsp; Comment
     </figcaption>
   </figure>
 </article>`).join('');
}

getImages();