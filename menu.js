/*!
 * Blogger Dropdown Menu v1.1 - Stable Refresh
 * Menambahkan submenu otomatis berdasarkan prefix "--"
 * Tetap aktif setelah save theme / refresh
 */

(function () {
  function buildDropdown() {
    var menu = document.getElementById('mainMenuList');
    if (!menu) return;

    var items = Array.from(menu.querySelectorAll('li'));
    var lastParent = null;

    items.forEach(function (li) {
      var link = li.querySelector('a');
      if (!link) return;
      var name = link.textContent.trim();

      // deteksi sub menu dari prefix "--"
      if (name.startsWith('--')) {
        link.textContent = name.replace(/^--+/, '').trim();
        if (lastParent) {
          var sub = lastParent.querySelector('ul');
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

  // Jalankan saat halaman dimuat
  document.addEventListener('DOMContentLoaded', buildDropdown);

  // Jalankan ulang jika Blogger memuat ulang elemen layout
  document.addEventListener('load', buildDropdown, true);
  setTimeout(buildDropdown, 2000);
})();
