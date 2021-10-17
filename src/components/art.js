// const grab = (e) => document.getElementById(e);
// const subBtn = document.querySelector('.sub')

// const renderComment = (arr) => {
//   const commentContainer = grab('popComment')
//   commentContainer.innerHTML = '';
//   if (arr) {
//     arr.forEach((item) => {
//       commentContainer.innerHTML += `
//       <div>
//       <p>
//       ${item.creation_date} ${item.username}: ${item.comment}
//       </p>
//       </div>
//       <br>
//       `
//     })
//   }
// }
// async function getComment(id, appID) {
//   await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Y5ExZ6TMJ2KXP15dXk0s/comments?item_id=${id}`)
//     .then(r => r.json())
//     .then(d => {
//       renderComment(d)
//     })
// }
// const commentGetter = (id, appID) => {
//   subBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     alert('hi' + id)
//     const name = grab('name')
//     const comment = grab('comment')
//     if (name.value === '' && comment.value === '') return
//     createMovieComment(id, name.value, comment.value, appID)
//     console.log(name.value, comment.value);
//     name.value = ''
//     comment.value = ''
//   })
// }
// const popup = async (image, id, appID) => {
//   commentGetter(id, appID)
//   const commentForImages = getComment(id)
//   console.log(commentForImages);
//   grab('popup-image').src = image
//   grab('popup').classList.add('container')
// }

// export {
//   popup,
//   updateLikes,
//   createMovieComment,
//   getComment,
//   commentGetter
// }
// export default article