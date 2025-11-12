/*!
 * Blogger Dropdown Menu v1.0
 * Buatan khusus untuk Blogger (struktur LinkList bawaan)
 * Copyright 2025
 */

document.addEventListener('DOMContentLoaded', function () {
  var menu = document.getElementById('mainMenuList');
  if (!menu) return;

  var items = Array.from(menu.querySelectorAll('li'));
  var lastParent = null;

  items.forEach(function(li) {
    var link = li.querySelector('a');
    if (!link) return;
    var name = link.textContent.trim();

    // Jika menu diawali dengan "--", jadikan submenu
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
});
