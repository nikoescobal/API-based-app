const appID = JSON.parse(localStorage.getItem('dataBase'));
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'

if (localStorage.getItem('dataBase') === null) {
  fetch(url, {
      method: 'Post',
      headers: {
        'content-type': 'application/json; charset=UTF-8'
      }

    })
    .then(response => response.text())
    .then(data => {
      localStorage.setItem('dataBase', JSON.stringify(data))
    })

}

const createLikes = async (artID) => {
  const data = JSON.stringify({ item_id: artID });
  const resp = await fetch(url += ,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
    body: data,
  });
  return resp.text();
};
