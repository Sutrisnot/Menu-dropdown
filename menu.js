/*!
 * Blogger Dropdown Menu v1.3 - Anti Reset Edition
 * Script ini akan otomatis memeriksa ulang menu setiap kali halaman Blogger selesai memuat
 * dan akan tetap aktif walaupun kamu menyimpan template atau mengedit HTML.
 */

(function () {
  function buildDropdown() {
    const menu = document.getElementById('mainMenuList');
    if (!menu) return;

    // Cegah duplikasi (hapus submenu lama jika ada)
    const existingDropdowns = menu.querySelectorAll('.dropdown');
    existingDropdowns.forEach(d => d.remove());
    const existingClasses = menu.querySelectorAll('.has-dropdown');
    existingClasses.forEach(c => c.classList.remove('has-dropdown'));

    const items = Array.from(menu.querySelectorAll('li'));
    let lastParent = null;

    items.forEach(li => {
      const link = li.querySelector('a');
      if (!link) return;
      const name = link.textContent.trim();

      if (name.startsWith('--')) {
        link.textContent = name.replace(/^--+/, '').trim();

        if (lastParent) {
          let sub = lastParent.querySelector('ul');
          if (!sub) {
            sub = document.createElement('ul');
            sub.classList.add('dropdown');
            lastParent.appendChild(sub);
            lastParent.classList.add('has-dropdown');
          }
          sub.appendChild(li);
        }
      } else {
        lastParent = li;
      }
    });
  }

  // Jalankan pertama kali saat halaman dimuat
  document.addEventListener('DOMContentLoaded', buildDropdown);

  // Jalankan ulang setiap kali Blogger reload atau dynamic content berubah
  window.addEventListener('load', buildDropdown);
  document.addEventListener('readystatechange', buildDropdown);
  setInterval(buildDropdown, 3000); // ← jalankan ulang tiap 3 detik untuk jaga stabil
})();
