(function () {
  // Fecha "Última actualización"
  const lastUpdated = document.getElementById('lastUpdated');
  // Pon aquí una fecha fija si quieres control manual:
  // lastUpdated.textContent = '24 oct 2025';
  const d = new Date();
  const fmt = d.toLocaleDateString('es-DO', { year: 'numeric', month: 'short', day: '2-digit' });
  if (lastUpdated) lastUpdated.textContent = fmt;

  // Año footer
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Volver arriba
  const backToTop = document.getElementById('backToTop');
  if (backToTop) backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

})();
