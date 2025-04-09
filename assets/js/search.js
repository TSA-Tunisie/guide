document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const sections = document.querySelectorAll('main section');

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    sections.forEach(section => {
      const text = section.textContent.toLowerCase();
      if (text.includes(query)) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
});
