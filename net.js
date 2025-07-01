document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for each category row
  const rows = document.querySelectorAll('.row');

  rows.forEach(row => {
    if (!row || !row.parentElement) return;

    const leftBtn = document.createElement('button');
    const rightBtn = document.createElement('button');

    leftBtn.className = 'scroll-btn left';
    rightBtn.className = 'scroll-btn right';

    leftBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    rightBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

    leftBtn.setAttribute('aria-label', 'Scroll left');
    rightBtn.setAttribute('aria-label', 'Scroll right');

    // Insert buttons beside the row
    row.parentElement.insertBefore(leftBtn, row);
    row.parentElement.appendChild(rightBtn);

    leftBtn.addEventListener('click', () => {
      row.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      row.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });

  // Auto-Rotating Featured Movie Section
  const featured = document.querySelector('.featured');
  const imageList = [
    'images/movie1.jpg',
    'images/movie2.jpg',
    'images/movie3.jpg'
  ];
  let index = 0;

  function changeFeaturedImage() {
    if (!featured) return;
    index = (index + 1) % imageList.length;

    // Smooth transition using opacity (CSS needed)
    featured.style.opacity = 0;
    setTimeout(() => {
      featured.style.backgroundImage = `url('${imageList[index]}')`;
      featured.style.opacity = 1;
    }, 500);
  }

  setInterval(changeFeaturedImage, 5000);
});
