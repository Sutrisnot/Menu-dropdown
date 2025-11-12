document.addEventListener('DOMContentLoaded', () => {
  const navMenus = document.querySelectorAll('.menu-navbar > .has-submenu > a');
  navMenus.forEach(menu => {
    menu.addEventListener('click', e => {
      e.preventDefault();
      const parent = menu.parentElement;
      // Tutup dropdown lain
      document.querySelectorAll('.menu-navbar > .has-submenu').forEach(li => {
        if (li !== parent) li.classList.remove('open');
      });
      parent.classList.toggle('open');
    });
  });

  // Tutup submenu kalau klik di luar menu
  document.addEventListener('click', e => {
    if (!e.target.closest('.menu-navbar')) {
      document.querySelectorAll('.menu-navbar > .has-submenu')
        .forEach(li => li.classList.remove('open'));
    }
  });
});
