const createLikes = async (artID) => {
  const data = JSON.stringify({ item_id: artID });
  const resp = await fetch(,{
    method: 'POST',
    headers: {
      'Content-type': 'application/json; Charset=UTF-8'
    },
    body: data
  });
  return resp.text()
} 