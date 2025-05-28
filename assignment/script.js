const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', function() {
  const query = searchInput.value;
  const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  window.location.href = searchUrl;
});
