const commentFormHandler = async function (event) {
  event.preventDefault();

  const post = document.querySelector('#post_id');
  const comment = document.querySelector('textarea[name="comment-body"]').value;
  let post_id = post.textContent;

  if (comment) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};


  const toggleBtn = document.getElementById('toggle-btn');
  const content = document.querySelector('.info');

  toggleBtn.addEventListener('click', function() {
    content.classList.toggle('hidden');
  });



document
  .querySelector('#new-comment-form')
  .addEventListener('click', commentFormHandler);
