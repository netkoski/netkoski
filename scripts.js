// Skrypt do obsługi rozwijanego menu galerii
const galleryMenu = document.querySelector('.gallery-menu');

if (galleryMenu) {
  const submenu = galleryMenu.querySelector('ul');
  submenu.style.display = 'none'; // Ukrywamy menu po załadowaniu strony

  galleryMenu.addEventListener('mouseenter', () => {
    // Ustawiamy animację rozwijania menu
    submenu.style.display = 'block';
    submenu.style.height = '0';
    const submenuHeight = submenu.scrollHeight;
    submenu.style.transition = 'height 0.3s ease';
    requestAnimationFrame(() => {
      submenu.style.height = submenuHeight + 'px';
    });
  });

  galleryMenu.addEventListener('mouseleave', () => {
    // Ustawiamy animację zwijania menu
    submenu.style.height = submenu.scrollHeight + 'px';
    submenu.style.transition = 'height 0.3s ease';
    requestAnimationFrame(() => {
      submenu.style.height = '0';
      submenu.addEventListener('transitionend', () => {
        submenu.style.display = 'none';
      }, { once: true });
    });
  });
}
