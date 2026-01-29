(function () {
  const KEY = 'vl-theme';
  const html = document.documentElement;

  const btn = document.getElementById('themeToggle');
  const btnMobile = document.getElementById('themeToggleMobile');

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);

    const icon = btn?.querySelector('i');
    if (icon) icon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';

    const iconM = btnMobile?.querySelector('i');
    if (iconM) iconM.className = theme === 'dark' ? 'bi bi-sun me-2' : 'bi bi-moon-stars me-2';

    localStorage.setItem(KEY, theme);
  }

  const saved = localStorage.getItem(KEY);

  const initial = saved || 'light';
  setTheme(initial);

  btn?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  btnMobile?.addEventListener('click', () => {
    btn?.click();
  });
})();
