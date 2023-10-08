const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

function toggleCard(card) {
    card.classList.toggle("flipped");
  }
  
// Get all anchor links within the card content
const cardLinks = document.querySelectorAll('.project-card .card-content a');

// Prevent default behavior for anchor links
cardLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
