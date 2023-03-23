const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('.results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value;

  // Send the search query to the API endpoint
  fetch(`/api/search?q=${query}`)
    .then(response => response.json())
    .then(results => {
      // Clear previous results
      resultsList.innerHTML = '';

      // Add each result to the list
      results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.title;
        resultsList.appendChild(li);
      });
    })
    .catch(error => console.error(error));
});
