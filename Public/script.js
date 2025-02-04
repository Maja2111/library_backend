function search() {
  const searchTerm = document.getElementById('search').value;
  fetch(`/api/books/search?query=${encodeURIComponent(searchTerm)}`)
    .then((response) => response.json())
    .then((data) => {
      // Hier können Sie die Ergebnisse im 'results'-Div anzeigen
      document.getElementById('results').innerHTML = JSON.stringify(data);
    })
    .catch((error) => console.error('Fehler:', error));
}
