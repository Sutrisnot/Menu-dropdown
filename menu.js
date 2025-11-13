/**
 * Menu Dropdown Viomagz Style
 * Versi stabil untuk Blogger (tidak diblokir sanitasi)
 */

document.addEventListener('DOMContentLoaded', function() {
  const mainMenu = document.getElementById('mainMenu');
  const menuButton = document.getElementById('menu-button');

  // Tombol toggle mobile
  if (menuButton && mainMenu) {
    menuButton.addEventListener('click', function() {
      mainMenu.classList.toggle('active');
    });
  }

  // Dropdown untuk mobile (klik)
  const dropdowns = mainMenu.querySelectorAll('.has-sub > a');
  dropdowns.forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = link.parentElement;
        parent.classList.toggle('open');
        const sub = parent.querySelector('ul');
        if (sub) {
          sub.classList.toggle('show');
        }
      }
    });
  });

  // Tutup dropdown kalau klik di luar menu (desktop)
  document.addEventListener('click', e => {
    if (!e.target.closest('#mainMenu')) {
      mainMenu.querySelectorAll('.has-sub').forEach(li => {
        li.classList.remove('open');
        const sub = li.querySelector('ul');
        if (sub) sub.classList.remove('show');
      });
    }
  });
});
