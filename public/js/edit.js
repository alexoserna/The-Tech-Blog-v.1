const post = document.querySelector('#post_id');
let post_id = post.textContent;

const editFormHandler = async function(event) {
  event.preventDefault();

  console.log('--------------',post_id);

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      post_id,
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${post_id}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-post-form')
  .addEventListener('click', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
