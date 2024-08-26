
const honeypotBtn = document.getElementById('honeypotBtn');
if (honeypotBtn) {
  honeypotBtn.addEventListener('click', () => {
    honeypotBtn.textContent = 'System Breached';
    setTimeout(() => {
      window.location.href = 'data.html';
    }, 1500); 
  });
}
// Fetch and Display Data in Data Page
const dataContainer = document.getElementById('file-data');
if (dataContainer) {
  fetch('/data')
    .then(response => response.text())
    .then(data => {
      dataContainer.textContent = data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
