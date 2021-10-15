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
      date: image['date_start']
    }
  })
  imageString = imageString.filter(image => image.image_id !== null && image.title !== null);

  console.log(imageString);
}

getImages();